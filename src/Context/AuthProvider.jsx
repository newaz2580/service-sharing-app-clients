import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/Firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const [darkMode,setDarkMode]=useState(
        localStorage.getItem('theme')==='dark'
    )
    const createUser=(email,password)=>{
        setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
   
    
    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
        const Unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
            if(currentUser?.email){
                const userData={email:currentUser.email}
                axios.post('https://service-sharing-server-steel.vercel.app/jwt',userData,{
                    withCredentials:true
                })
                .then(res=>{
                    console.log(res.data)
                    
                }).catch(error=>{
                   toast.error(error)
                })
            }
        })
        return()=> Unsubscribe()
    },[darkMode])
    
    const info={
    createUser,
    loginUser,
    user,
    darkMode,
    setDarkMode,
    loading,
    setLoading
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