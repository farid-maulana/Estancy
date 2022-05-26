import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from './IconButton'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const AlternativeAuth = () => {
  const navigate = useNavigate()
  const auth = getAuth()

  const signInWithGoogleHandler = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        navigate('/')
      })
  }

  return (
    <div className="row px-xl-5 px-sm-4 px-3 mb-4">
      <div className="mb-3 position-relative text-center">
        <p className="text-sm font-weight-bold text-secondary text-border d-inline z-index-2 bg-white px-3">
          or sign in with
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <IconButton onClickHandler={signInWithGoogleHandler} path={'img/icons/google.png'} alt={'Google'} />
        <IconButton path={'img/icons/apple.png'} alt={'Apple ID'} />
        <IconButton path={'img/icons/facebook.png'} alt={'Facebook'} />
      </div>
    </div>
  )
}

export default AlternativeAuth