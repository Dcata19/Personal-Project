import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase'

export default function LogIn({ setShowModal, emailRef, password }) {

    const [message, setMessage] = useState(null);

    function logIn() {
        signInWithEmailAndPassword(auth, emailRef.current.value, password.current.value)
            .then(() => {
                // Signed in 
            })
            .catch(() => {
                setMessage('Invalid fields!')
            })
        setTimeout(() => {
            setMessage(null)
        }, 3000)
    }

    return (
        <>
            <div className="card border-0 shadow-lg p-3 mb-5 bg-body rounded position-absolute start-50 top-50 translate-middle" style={{ width: "21rem" }}>
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control required-pass" ref={emailRef} placeholder='Enter your email address'></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" ref={password} placeholder='Enter your password'></input>
                    </div>
                    <div className='mb-3 text-center'>
                        <button className="btn btn-primary" onClick={logIn}>SIGN IN</button>
                    </div>
                    <p className="bg-danger text-white shadow-lg rounded text-center">{message}</p>
                    <hr className="border border-success border-primary opacity-75"></hr>
                    <div className='text-center'>
                        <button type="button" className="btn btn-primary" onClick={() => { setShowModal(true) }}>
                            Create a new account
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
