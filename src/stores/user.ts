import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { USER, BLOOD_GROUP } from '@/global.types'
import { usersList } from '@/constants/dummy/users'
import { devMode } from '@/constants/vars'
import { db } from '@/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

export const useUserStore = defineStore('user', () => {
  const users = ref<USER[]>([])
  const count = ref(10)
  const isLoading = ref(false)
  const offlineMode = ref(navigator.onLine)

  const getUsers = async () => {
    isLoading.value = true
    if (devMode) {
      // Use dummy data in development mode
      users.value = usersList
      await saveData(users.value)
    } else {
      try {
        // Fetch data from Firestore
        const querySnapshot = await getDocs(collection(db, 'users'))
        const data: USER[] = querySnapshot.docs.map((doc) => doc.data() as USER)
        users.value = data
        saveData(users.value) //store to storage
      } catch (error) {
        console.error('Failed to fetch users:', error)
      }
    }
    isLoading.value = false
  }

  const saveData = async (data: USER[]) => {
    if ('indexedDB' in window) {
      const db = await openDB()
      const tx = db.transaction('users', 'readwrite')
      const store = tx.objectStore('users')
      store.put(JSON.stringify(data), 'userList')
      db.close()
    } else {
      localStorage.setItem('userList', JSON.stringify(data))
    }
  }

  const loadData = async () => {
    if ('indexedDB' in window) {
      const db = await openDB()
      const tx = db.transaction('users', 'readonly')
      const store = tx.objectStore('users')
      const request = store.get('userList')
      return new Promise<USER[]>((resolve, reject) => {
        request.onsuccess = () => {
          const data = request.result
          db.close()
          resolve(data ? JSON.parse(data) : [])
        }
        request.onerror = () => {
          db.close()
          reject(request.error)
        }
      })
    } else {
      const data = localStorage.getItem('userList')
      return data ? JSON.parse(data) : []
    }
  }

  const openDB = async () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('UserStore', 1)
      request.onupgradeneeded = () => {
        const db = request.result
        db.createObjectStore('users')
      }
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }

  const groupedData = computed(() => {
    const ageRanges = ['below 10', '11-20', '21-30', '31-40', '41-50', '51 above']
    const bloodGroups: BLOOD_GROUP[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

    const initialData = ageRanges.map(() => bloodGroups.map(() => 0))

    users.value.forEach((user) => {
      const age = parseInt(user.age)
      const ageIndex = ageRanges.findIndex((range, index) => {
        if (index === 0) return age < 10
        if (index === ageRanges.length - 1) return age > 50
        const [min, max] = range.split('-').map(Number)
        return age >= min && age <= max
      })
      const bloodGroupIndex = bloodGroups.indexOf(user.blood_group)
      if (ageIndex !== -1 && bloodGroupIndex !== -1) {
        initialData[ageIndex][bloodGroupIndex]++
      }
    })

    return ageRanges.map((range, index) => ({
      name: range,
      data: initialData[index]
    }))
  })

  return { count, users, isLoading,offlineMode, getUsers, saveData, loadData, groupedData }
})
