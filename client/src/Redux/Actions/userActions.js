import * as User from "../ActionTypes/User"
import * as userApi from "./../APIs/userServices"
import {ErrorsAction, tokenProtection} from "../Protection"
import toast from "react-hot-toast"

//login 
const loginAction = (datas)=>async (dispatch)=>{
    try{
        dispatch ({type:User.USER_LOGIN_REQUEST})
        const response = await userApi.loginService(datas)
        dispatch ({type:User.USER_LOGIN_SUCCESS,payload:response})
    }catch(error){
   ErrorsAction(error,dispatch,User.USER_LOGIN_FAIL)
    }
}

//REGISTER
const  registerAction = (datas)=>async(dispatch)=>{
    try{
        dispatch ({type:User.USER_REGISTER_REQUEST})
        const response = await userApi.registerService(datas)
        dispatch ({type:User.USER_REGISTER_SUCCESS,payload:response})
        dispatch({type:User.USER_LOGIN_SUCCESS , payload:response})
    }catch(error){
        ErrorsAction (error,dispatch,User.USER_REGISTER_FAIL)
    }
}

//logout
const logoutAction=()=>(dispatch)=>{
    userApi.logoutService()
    dispatch ({type:User.USER_LOGOUT})
    dispatch ({type:User.USER_LOGIN_RESET})
    dispatch ({type:User.USER_REGISTER_RESET})
}

//update
const updateProfileAction=(user)=>async (dispatch,getState)=>{
    try {
        dispatch ({type:User.USER_UPDATE_PROFILE_REQUEST})
        const response = await userApi.updateProfileService(user,tokenProtection(getState))
        dispatch({
            type:User.USER_UPDATE_PROFILE_SUCCESS,
        payload:response,
        })
 toast.success("Profile Updated ...")
dispatch({
    type:User.USER_LOGIN_SUCCESS,
    payload:response
})
    } catch (error) {
        ErrorsAction(error , dispatch , User.USER_UPDATE_PROFILE_FAIL)
    }
}

//delete
const deleteProfileAction=()=>async(dispatch,getState)=>{
    try {
        dispatch({type:User.USER_DELETE_PROFILE_REQUEST})
        await userApi.deleteProfileService(tokenProtection(getState))
        dispatch({type:User.USER_DELETE_PROFILE_SUCCESS})
        toast.success("Profile Deleted")
        dispatch(logoutAction())
    } catch (error) {
        ErrorsAction(error , dispatch , User.USER_DELETE_PROFILE_FAIL)

    }
}

//change Password
const changePasswordAction=(passwords)=>async (dispatch,getState)=>{
    try {
        dispatch({type:User.USER_CHANGE_PASSWORD_REQUEST})
        const response = await userApi.changePasswordService(
            passwords,tokenProtection(getState)
        )
        dispatch({type:User.USER_CHANGE_PASSWORD_SUCCESS,payload : response})
    } catch (error) {
        ErrorsAction(error , dispatch , User.USER_CHANGE_PASSWORD_FAIL)
    }
}

//get all favorite movies
const getFavoriteMoviesAction=()=>async(dispatch,getState)=>{
    try {
        dispatch ({type:User.GET_FAVORITE_MOVIES_REQUEST})
        const response = await userApi.getFavoriteMovies(tokenProtection(getState))
        dispatch({
            type:User.GET_FAVORITE_MOVIES_SUCCESS,payload:response,
        })
    } catch (error) {
        ErrorsAction(error,dispatch,User.GET_FAVORITE_MOVIES_FAIL)
    }
}
//delete all favorite movies
const DeleteFavoriteMoviesAction=()=>async(dispatch,getState)=>{
    try {
        dispatch ({type:User.DELETE_FAVORITE_MOVIES_REQUEST})
        await userApi.deleteFavoriteMovies(tokenProtection(getState))
        dispatch({type:User.DELETE_FAVORITE_MOVIES_SUCCESS})
        toast.success("Favorite Movies Deleted")
    } catch (error) {
        ErrorsAction(error,dispatch,User.DELETE_FAVORITE_MOVIES_FAIL)
    }
}

//admin get all users
const getAllUsersAction=()=>async(dispatch,getState)=>{
    try {
        dispatch ({type:User.GET_ALL_USERS_REQUEST})
        const response = await userApi.getAllUsersService(tokenProtection(getState))
        dispatch({
            type:User.GET_ALL_USERS_SUCCESS,
            payload:response
        })
    } catch (error) {
        ErrorsAction(error , dispatch , User.GET_ALL_USERS_FAIL)
    }
}

//admin delete user
const deleteUserAction=(id)=>async(dispatch,getState)=>{
    try {
        dispatch ({type:User.DELETE_USER_REQUEST})
        await userApi.deleteUserService(id , tokenProtection (getState))
        dispatch({
            type:User.DELETE_USER_SUCCESS
        })
        toast.success("User Deleted")
    } catch (error) {
        ErrorsAction(error , dispatch , User.DELETE_USER_FAIL)
    }
}


export {loginAction,
    registerAction,
    logoutAction,
    updateProfileAction,
    deleteProfileAction,
    changePasswordAction,
    getFavoriteMoviesAction,
    DeleteFavoriteMoviesAction,
    getAllUsersAction,
    deleteUserAction}