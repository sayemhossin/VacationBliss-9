import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

const logOut = () =>{
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
        console.log('user in auth',user)
        setUser(user)
        
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
        updateUserProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;