import React, { useState } from "react";
import LoginForm from "./components/auths/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { app } from "./firebase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleAction = (id) => {
    console.log("clicked")
    const auth = getAuth()
    if(id === 2){
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res)
      })
    }else{
      signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res)
      })
    }
    
  }

  return ( 
    <Router>
      <div>
        <>
        <Routes>
          <Route path='/login' element={<LoginForm title="Login" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction()}/>} />
          <Route path='/register' element={<LoginForm title="Register" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} />} />
        </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;