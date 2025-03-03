import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(false)

   const provider = new GoogleAuthProvider();
   function googleSignin(){
    signInWithPopup(auth,provider);
    setLoading(true)
   }

   function handleRegister(email , pass){
    createUserWithEmailAndPassword(auth , email , pass);
    setLoading(true)
   }


   function handleLogin(email , pass){
    signInWithEmailAndPassword(auth , email , pass);
    setLoading(true)
   }

   useEffect(()=>{
   const unSub = onAuthStateChanged(auth , currentUser=>{
      if(currentUser){
        setUser(currentUser);
        setLoading(false)
      }else{
        setLoading(true);
        setUser(null)
      }
    })

    return ()=> unSub()
   },[])

 
    const obj = {
      googleSignin,
      user , setUser,
      loading,
      handleRegister,
      handleLogin
    }
    return <AuthContext.Provider value={obj}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider