import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config.js';
export const authContext = createContext(null)
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const logInUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const updateUserData = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

const logInByGoogle=()=>{
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
}


const logInByEmailPassword=(email,password)=>{
    setLoading(true)
 return   signInWithEmailAndPassword(auth, email, password)
}

const logOut=()=>{
    
return signOut(auth).then((result) => {
    console.log(result);
    setLoading(false)
}).catch((error) => {
 console.log(error);
});
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        setUser(loggedUser)
        setLoading(false)
    })
    return () => {
        unsubscribe()
    }
}, [])

    const authInfo = {
        user,
        setUser,
        logInUser,
        updateUserData,
        logInByGoogle,
        logInByEmailPassword,
        logOut,
        loading

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProviders;