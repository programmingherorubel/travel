import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebaseInit';
import { toast } from "react-toastify";
export const AuthContext = createContext(null)




const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState(null)
    const [error,setError] = useState('')
    


    // Register 
    const registerUser = (email,password,name,photo) =>{
       
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('Success fully  Register', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
               
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            });
    }
 
    // Login 
    const loginUser = (email,password) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('Successfully Login Complete', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    setLoading(false)
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            });
    }
 
  
    
    // sing out 
    const logout = ()=>{
        signOut(auth).then(() => {
            toast.success('Successfully Singout ', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
          }).catch((error) => {
            // An error happened.
          });
    }

    // google Sing in 
    const googleSingIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user)
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }

    // onAuthChange 
    useEffect(()=>{
        setLoading(true)
        const unSubscribe =  onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
          });
        return ()=>{
           return  unSubscribe()
        }
    },[])

    const information = {
        user,
        googleSingIn,
        logout,
        registerUser,
        loginUser,
        loading
    }
    
    return (
        <AuthContext.Provider value ={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;