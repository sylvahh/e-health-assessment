import { openDB } from 'idb'

export const saveDataToIndexedDB = async (data: any, storeName: string) => {
  const db = await openDB('my-database', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName)
      }
    }
  })

  const tx = db.transaction(storeName, 'readwrite')
  tx.objectStore(storeName).put(JSON.stringify(data), 'data')
  await tx.done
  db.close()
}

export const loadDataFromIndexedDB = async (storeName: string) => {
  const db = await openDB('my-database', 1)
  const tx = db.transaction(storeName, 'readonly')
  const data = await tx.objectStore(storeName).get('data')
    db.close()
    
  return JSON.parse(data)
}
