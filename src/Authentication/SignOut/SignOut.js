import React from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../../firebase'

export default function SignOut() {

    function userSignOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
    }

    return (
        <button className="btn btn-danger" onClick={userSignOut}>Sign Out</button>
    )
}
