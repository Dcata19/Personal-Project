import React, { useRef } from 'react'
import { updateProfile } from "firebase/auth"
import { auth } from '../../firebase'

export default function ChangeProfilePhoto() {

    const inputRef = useRef(null);

    const handleClick = () => {
        // 👇️ open file input box on click of other element
        inputRef.current.click();
    };

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }
        // 👇️ reset file input
        event.target.value = null;
    };

    const changeProfilePhoto = () => {
        updateProfile(auth.currentUser, {
            photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    return (
        <div className='container text-end'>
            <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={handleFileChange} />
            <button type='button' className="btn btn-light btn-sm" onClick={handleClick}>Change Photo</button>
        </div>
    )
}
