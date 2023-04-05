import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Components/Notifications/Loader'
import { deleteUserAction, getAllUsersAction } from '../../../Redux/Actions/userActions'
import Empty from '../../../Components/Notifications/Empty'

import SideBar from '../SideBar'
import Table2 from '../../../Components/Table2'

const Users = () => {
  const dispatch = useDispatch()

  const {isLoading , isError , users}=useSelector(
    (state)=>state.adminGetAllUsers
  )
//delete
  const { isError:deleteError,isSuccess }=useSelector(
    (state)=>state.adminDeleteUser
  )

  const deleteUserHandler=(id)=>{
   if (window.confirm("Are you sure you want to delete this user")){
   dispatch (deleteUserAction(id))
   }
    
  }

  //useEffect
  useEffect(()=>{
    dispatch(getAllUsersAction())
    if (isError || deleteError){
      toast.error(isError || deleteError)
      dispatch({type:isError ? "GET_ALL_USERS_RESET":"DELETE_USER_RESET"})
    }
  },[dispatch,isError,deleteError,isSuccess])
  return (
    <SideBar>
    <div className='flex flex-col gap-6'>
    <h2 className='text-xl font-bold'>Users</h2>
    {isLoading ?<Loader/> : users?.length > 0?<Table2 data={users} admin={false} onDeleteFunction={deleteUserHandler}/>:(
    <Empty message="you dont have any user"/>)
    }
</div>
    </SideBar>
  )
}

export default Users