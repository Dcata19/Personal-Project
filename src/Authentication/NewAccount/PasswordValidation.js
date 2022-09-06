import React from 'react'
import { useState } from 'react'
import validator from 'validator'

export default function PasswordValidation({ password }) {

    const [errorMessage, setErrorMessage] = useState('Is Not Strong Password')

    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Is Strong Password')
        } else {
            setErrorMessage('Is Not Strong Password')
        }
    }

    return (
        <>
            <div className='mb-2'>
                <input type="password" className="form-control mb-3" onChange={(e) => { validate(e.target.value) }} ref={password} placeholder='Enter your password'></input>
                <p>Strength: {errorMessage === 'Is Not Strong Password' ?
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{errorMessage}</span> :
                    <span style={{
                        fontWeight: 'bold',
                        color: 'green',
                    }}>{errorMessage}</span>}</p>
            </div>
        </>
    )
}
