import React, { useState } from 'react'
import MysignUp from '../../assets/components/signUp'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'

const MyLogin = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const emailHandler = (e)=>{

    setEmail(e.target.value)

  }
  const passwordHandler = (e)=>{

    setPassword(e.target.value)

  }

  const loginHandler = async()=>{

   await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('uid', user.uid)
    navigate("/mainLayout")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }

  return (
    <>
    
    <MysignUp label={"Login"} span={"Doesn't Have An Account"} to={"/signup"} onChange1={emailHandler} onChange2={passwordHandler} onClick={loginHandler}/>
    </>
  )
}

export default MyLogin