import React, { useEffect, useState } from 'react'
import SignOut from '../../Authentication/SignOut/SignOut'
import { auth, db } from '../../firebase'
import { doc, getDoc } from "firebase/firestore";

export default function NavBar() {

    const [check, setCheck] = useState(null)

    async function getAccountType() {
        const docRef = doc(db, "account", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().accountType === 'Developer') {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }

    useEffect(() => {
        getAccountType()
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light border-bottom">
                <div className="container-fluid">
                    <a className="navbar-brand" href='#'>{auth.currentUser.displayName}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {!check ?
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="btn btn-success">Create Request</button>
                                </li>
                            </ul> :
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="btn btn-success">Search Project</button>
                                </li>
                            </ul>}
                        <form className="d-flex">
                            <SignOut />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
