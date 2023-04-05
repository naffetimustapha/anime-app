import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'



const ProtectedRouter = () => {
    const {userInfo}=useSelector((state)=>state.userLogin)
  return userInfo?.token?<Outlet/>:<Navigate to ="/login"/>
}

//--------------admin--------------
function AdminProtectedRouter(){
    const {userInfo}= useSelector((state)=> state.userLogin)
    return userInfo?.token?userInfo?.isAdmin?
    <Outlet/>:<Navigate to ="/*"/> : <Navigate to = "/login"/>
}

export {ProtectedRouter , AdminProtectedRouter ,}