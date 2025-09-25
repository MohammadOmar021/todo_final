import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainLayout from './assets/components/mainLayout'

import MyLogin from './pages/login'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/signUp'
import AuthRoute from './Routes/authRoute'
import PrivateRoute from './Routes/privateRoute'




function App() {


  return (
    <>
   <div className='flex justify-center md:items-center h-screen'>
     

    <Routes>

    <Route element={<AuthRoute/>}>
    <Route path='/' element={<MyLogin/>}/>
    </Route>
    <Route path='/signup' element={<SignUp/>}/>
    <Route element={<PrivateRoute/>}>
    <Route path='/mainLayout' element={<MainLayout/>}/>
    </Route>
    </Routes>

     
     {/* <MainLayout></MainLayout> */}
    
   </div>

    
   
    </>
  )
}

export default App
