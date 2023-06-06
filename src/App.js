import React, { useEffect, useState } from "react";
import LoginForm from "./components/auths/LoginForm";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (!authToken) {
      navigate('/login')
    }
  }, [])

  const handleAction = (id) => {
    console.log("clicked")
    const auth = getAuth()
    if(id === 2){
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate('/')
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
        console.log(res)
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
        <Routes>
          <Route path='/login' element={<LoginForm title="Login" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction()}/>} />
          <Route path='/register' element={<LoginForm title="Register" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;