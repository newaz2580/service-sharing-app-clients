import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Firebase.init';
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
   
    
    useEffect(()=>{
        const Unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return()=> Unsubscribe()
    },[])
    console.log(user)
    const info={
    createUser,
    loginUser,
    user,
    }
    return (
        <div>
            <AuthContext value={info}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;