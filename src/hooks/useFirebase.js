import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init"
import { GoogleAuthProvider, getAuth, signInWithPopup,signOut, onAuthStateChanged} from "firebase/auth";

// initialize first
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then(result =>{
            console.log(result.user)
            setUser(result.user)
        }).catch((error => {
            setError(error.message)
        }))
    }
    const logOut = () => {
        signOut(auth).then(()=>{
            console.log('Sign Out successfull')
            setUser({});
        }).catch((error) => {
            setError(error.message) 
        });
    }
    // State changing solution 
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
                console.log(user);
            }
        })
    }, [])

    return{
        user,
        error,
        signInWithGoogle,
        logOut,
    }
}

export default useFirebase;