import React from 'react'
import { auth, firebase } from '../Services/FirebaseConnection'

const Login = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <button onClick={signInWithGoogle}>login</button>
        </div>
    )
}

export default Login
