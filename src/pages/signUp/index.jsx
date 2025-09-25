import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import MysignUp from '../../assets/components/signUp';
import { Navigate, useNavigate } from 'react-router-dom';


const SignUp = () => {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
  const emailHandler = (e)=>{
      console.log("signUp textfield email", e.target.value)
      setEmail(e.target.value)
      
  }
 
  const passwordHandler = (e)=>{
    console.log("signUp textfield password", e.target.value)
    setPassword(e.target.value)

  }


  const signHandler = async()=>{

   await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    navigate("/")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


  }

    return (
    <>
    
    <MysignUp label={"Sign Up"} span={"Already Have An Account"} onChange1={emailHandler} onChange2={passwordHandler} to={"/"} onClick={signHandler}/>
    
    </>
  )
}

export default SignUp