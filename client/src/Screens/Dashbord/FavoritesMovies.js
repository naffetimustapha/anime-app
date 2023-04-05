import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../../Components/Table'
import {  DeleteFavoriteMoviesAction, getFavoriteMoviesAction } from '../../Redux/Actions/userActions'
import SideBar from './SideBar'
import Loader from '../../Components/Notifications/Loader'
import Empty from '../../Components/Notifications/Empty'

const FavoritesMovies = () => {
  const dispatch = useDispatch()

  const {isLoading , isError , likedMovies}=useSelector(
    (state)=>state.userGetFavoriteMovies
  )
//delete
  const {isLoading:deleteLoading , isError:deleteError , isSuccess}=useSelector(
    (state)=>state.userDeleteFavoriteMovies
  )

  const deleteMoviesHandler=()=>{
    window.confirm("Are you sure you want to delete all movies")&&
    dispatch(DeleteFavoriteMoviesAction())
  }

  //useEffect
  useEffect(()=>{
    dispatch(getFavoriteMoviesAction())
    if (isError || deleteError){
      toast.error(isError || deleteError)
      dispatch({type:isError ? "GET_FAVORITE_MOVIES_RESET":"DELETE_FAVORITE_MOVIES_RESET"})
    }
  },[dispatch,isError,deleteError,isSuccess])
  return (
<SideBar>
<div className='flex flex-col gap-6'>
    <div className='flex-btn gap-2'>
    <h2 className='text-xl font-bold'>Favorites Movies</h2>
    {
      likedMovies?.length >0 &&
      <button
      disabled={deleteLoading}
      onClick={deleteMoviesHandler}
       className='bg-main font-medium transition hover:bg-subMain border border-subMain text-white py-3 px-6 rounded '>
        {
          deleteLoading ? "Deleting....." :"Delete All"
        }
    </button>
    }
    
    </div>
    {isLoading ?<Loader/> : likedMovies.length > 0?<Table data={likedMovies} admin={false}/>:(
    <Empty message="you have not favorite Movie"/>)
    }
    
</div>
</SideBar>
  )
}

export default FavoritesMovies