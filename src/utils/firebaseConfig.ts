import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  projectId: import.meta.env.VITE_PROJECT_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
