import React, { useState, useRef } from 'react'
import PasswordValidation from './PasswordValidation'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '../../firebase'
import { doc, setDoc } from "firebase/firestore";

export default function NewAccount({ setShowModal, password, emailRef }) {

    const [message, setMessage] = useState(null)
    const userName = useRef(null)
    const [accountType, setAccountType] = useState(null)

    async function saveAccountType() {
        try {
            await setDoc(doc(db, "account", auth.currentUser.uid), {
                accountType: accountType
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    function create() {
        if (userName.current.value !== '' && accountType !== null)
            createUserWithEmailAndPassword(auth, emailRef.current.value, password.current.value)
                .then(() => {
                    // Signed in
                    saveAccountType();
                    updateProfile(auth.currentUser, {
                        displayName: userName.current.value
                    }).then(() => {
                        // Profile updated!
                        window.location.reload()
                    })
                })
                .catch(() => {
                    if (emailRef.current.value === '') {
                        setMessage('Invalid email!')
                    } else {
                        setMessage('Email already exists!')
                    }
                })
        else
            setMessage('Invalid fields!')
        setTimeout(() => {
            setMessage(null)
        }, 3000)
    }

    return (
        <div className="card position-absolute start-50 top-50 translate-middle shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '26rem' }}>
            <div className="card-body">
                <div className="header row align-items-start">
                    <div className='vw-100 col'>
                        <p className='fw-bold'>Create a new account</p>
                    </div>
                    <div className='col text-end'>
                        <button className="btn-close" onClick={() => { setShowModal(false) }}></button>
                    </div>
                    <div className='text-center'>
                        <p className="bg-danger text-white shadow-lg rounded text-center">{message}</p>
                    </div>
                </div>
                <hr className='m-0'></hr>
                <div className="body">
                    <form>
                        <div>
                            <label className="form-label fs-6 mb-1 mt-3">Email address</label>
                            <input type="email" className="form-control" ref={emailRef} placeholder='Enter your email address'></input>
                            <label className="form-label fs-6 mb-1">Your Name</label>
                            <input type="text" className="form-control" ref={userName} placeholder='Enter your name'></input>
                            <label className="form-label fs-6 mb-1">Password</label>
                            <PasswordValidation password={password} />
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type='button' className="btn btn-primary" onClick={() => { setAccountType('Developer') }}>Developer</button>
                                <button type='button' className="btn btn-primary" onClick={() => { setAccountType('Customer') }}>Customer</button>
                            </div>
                        </div>
                    </form>
                </div>
                <hr className='m-3'></hr>
                <div className="footer">
                    <div className='col text-center'>
                        <button className='btn btn-success' onClick={create}>Create account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
