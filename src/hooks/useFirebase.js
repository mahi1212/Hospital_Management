import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
} from "firebase/auth";

// initialize first
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out successfull");
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // State changing solution
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      }
    });
  }, []);

  // email pass registartion
  const registerUser = (name, email, password, navigate) => {
    // setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // Save user
        // saveUser(email, name, 'POST')
        // Send name to the firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            if (error === "Firebase: Error (auth/invalid-email).") {
              setError(error.message);
            }
          });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

//   login with email pass
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(signInWithEmailAndPassword, email, password).then((userCredential) => {
        // Redirecting to previous page after login using useNavigate()
        // const from = location?.state?.from || '/courses'
        // navigate(from , {replace: true});
        setError('');
    }).catch((error) => {
        setError(error.message);
    })
  }
  return {
    user,
    error,
    signInWithGoogle,
    logOut,
    registerUser,
    loginUser,
    
  };
};

export default useFirebase;
