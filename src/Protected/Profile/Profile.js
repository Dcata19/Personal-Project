import React from 'react'
import ChangeProfilePhoto from './ChangeProfilePhoto'

export default function Profile() {
  return (
    <div className='mt-4 container position-relative'>
      <div className="card start-50 translate-middle-x" style={{width: "50rem"}}>
        <img src='Images\profile_default.jpg' className="card-img-top" alt='' style={{height: "12rem", objectFit: "contain"}}></img>
        <ChangeProfilePhoto />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
    </div>
  )
}
