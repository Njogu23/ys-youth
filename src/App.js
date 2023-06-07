import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { app } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyContext } from "./MyContext";
import Toggle from "./components/toggleSignIn/Toggle";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useState(null);
  const [ user, setUser] = useState("")
  console.log(user.uid)

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(app);
    
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        auth.onAuthStateChanged((user) => {
          setUser(user)
          if (user) {
            user.getIdToken()
              .then((token) => {
                setAuthToken(token);
                navigate('/');
              })
              .catch((error) => {
                console.error('Error getting ID token:', error);
              });
          } else {
            navigate('/sign-in');
          }
        });
      })
      .catch((error) => {
        console.error('Error setting persistence:', error);
      });
  }, []);

  const handleAction = (id) => {
    const auth = getAuth()

    if(id === 2){
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate('/')
        setAuthToken(res._toKenResponse.refreshToken);
        sessionStorage.setItem('Auth Token', res._toKenResponse.refreshToken)
      })
      .catch((error) => {
        if(error.code === 'auth/email-already-in-use'){
          toast.error('Email Already in Use')
        }
      })
    }else{
      signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate('/')
        setAuthToken(res._toKenResponse.refreshToken);
        sessionStorage.setItem('Auth Token', res._toKenResponse.refreshToken)
      })
      .catch((error) => {
        if(error.code === 'auth/wrong-password'){
          toast.error('Please check the Password')
        }else if(error.code === 'auth/user-not-found'){
          toast.error("Please check the Email")
        }
      })
    }
    
  }

  return (
    <div>
      <ToastContainer />
      <MyContext.Provider value={{email, setEmail, password, setPassword, handleAction, authToken}}>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Toggle />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;