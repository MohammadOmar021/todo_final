import React from 'react'
import MainLayout from '../assets/components/mainLayout'
import { Outlet } from 'react-router-dom'

const AuthRoute = () => {
  return localStorage.getItem('uid') ? <MainLayout/> : <Outlet/>
}

export default AuthRoute