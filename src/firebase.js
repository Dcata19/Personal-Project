import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD5MHgtPFL3O8iEt6uXQJ8BSUKCaPdfyQ8",
  authDomain: "personalproject-5f704.firebaseapp.com",
  projectId: "personalproject-5f704",
  storageBucket: "personalproject-5f704.appspot.com",
  messagingSenderId: "86698784105",
  appId: "1:86698784105:web:04a86f71a84e669d0539f8",
  measurementId: "G-031YZ277Z2"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)