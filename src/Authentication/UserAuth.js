import React from 'react'
import { useRef, useState } from 'react'
import LogIn from './LogIn/LogIn'
import NewAccount from './NewAccount/NewAccount'

export default function UserAuth() {

    const [showModal, setShowModal] = useState(false)
    const emailRef = useRef(null)
    const password = useRef(null)

    return (
        <>
        <LogIn setShowModal={setShowModal} emailRef={emailRef} password={password} />
        {showModal && <NewAccount setShowModal={setShowModal} emailRef={emailRef} password={password} />}
        </>
    )
}
