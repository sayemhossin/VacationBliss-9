import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)




    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=>{
       return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = ()=>{
       return signInWithPopup(auth, githubProvider)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

const updateUserProfile = (name, photo) => {
    
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
        
      })
      
      
}


useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, user =>{
        
       
        setUser(user)
        setLoading(false)
        
      })
      return () =>{
          unSubscribe()
      }
  },[])


    const authInfo= {
        createUser,
        signIn,
        logOut,
        user,
        updateUserProfile,
        loading,
        googleLogin,
        githubLogin
        
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;