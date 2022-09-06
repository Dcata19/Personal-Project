import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from './Protected/NavBar/NavBar'
import Profile from './Protected/Profile/Profile'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './firebase'
import UserAuth from './Authentication/UserAuth'

export default function App() {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true)
    } else {
      setUser(false)
    }
  })

  return (
    <>
      {user && <NavBar />}
      <Routes>
        {!user && <Route path='/' element={<UserAuth />} />}
        {user && <Route path='/' element={<Profile />} />}
      </Routes>
    </>
  )
}

