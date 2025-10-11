import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import MysignUp from '../../assets/components/signUp';
import { Navigate, useNavigate } from 'react-router-dom';
import MyTextField from '../../assets/components/myTextField';


const SignUp = () => {
    const [name, setName] = useState('')
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

    const createUser = fetch("http://localhost:3000/createUser", {
      method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ name: 'Umer', email: 'umer@example.com', isActive: true})
    }).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))



  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  

  }

    return (
    <>
   
    <MysignUp label={"Sign Up"} span={"Already Have An Account"} onChange1={emailHandler} onChange2={passwordHandler} to={"/"} onClick={signHandler}
    show={true}
    />
    
    </>
  )
}

export default SignUp