import * as User from '../ActionTypes/User'

//LOGIN 
export const userLoginReducer=(state={},action)=>{
    switch (action.type){
        case User.USER_LOGIN_REQUEST:
        return {isLoading : true};
        case User.USER_LOGIN_SUCCESS:
            return{isLoading : false,userInfo:action.payload , isSuccess:true}
            case User.USER_LOGIN_FAIL:
                return {isLoading:false,isError:action.payload}
                case User.USER_LOGIN_RESET:
                    return{}
                case User.USER_LOGOUT:
                    return{}
                    default:
                        return state

    }
}

//REGISTER
export const userRegisterReducer=(state={},action)=>{
switch (action.type){
case User.USER_REGISTER_REQUEST:
    return {isLoading:true}
case User.USER_REGISTER_SUCCESS:
return {isLoading:false,userInfo:action.payload,isSuccess:true}
case User.USER_REGISTER_FAIL:
    return {isLoading:false,isError:action.payload}
    case User.USER_REGISTER_RESET:
        return{}
        default:
            return state
}
}

//update
export const userUpdateProfileReducer = (state={},action)=>{
    switch (action.type){
        case User.USER_UPDATE_PROFILE_REQUEST:
            return{isLoading:true}
        case User.USER_UPDATE_PROFILE_SUCCESS:
            return {isLoading : false , userInfo:action.payload,isSuccess:true}
        case User.USER_UPDATE_PROFILE_FAIL:
            return {isLoading : false , isError : action.payload}
        case User.USER_UPDATE_PROFILE_RESET:
            return{}
        default:
            return state
    }
}

//DELETE
export const userDeleteProfileReducer = (state={},action)=>{
    switch(action.type){
        case User.USER_DELETE_PROFILE_REQUEST:
            return {isLoading:true}
        case User.USER_DELETE_PROFILE_SUCCESS:
            return {isLoading:false, isSuccess:true}
        case User.USER_DELETE_PROFILE_FAIL:
            return{isLoading:false , isError:action.payload}
        case User.USER_DELETE_PROFILE_RESET:
            return {}
            default:
                return state
    }
}

//change password
export const userChangePasswordReducer=(state={},action)=>{
switch (action.type){
    case User.USER_CHANGE_PASSWORD_REQUEST:
        return {isLoading:true}
    case User.USER_CHANGE_PASSWORD_SUCCESS:
        return {isLoading:false , isSuccess:true , message:action.payload.message}
    case User.USER_CHANGE_PASSWORD_FAIL:
     return {isLoading:false,isError:action.payload}
    case User.USER_CHANGE_PASSWORD_RESET:
    return{}
    default:
        return state
    }
}

//Get favorite movies
export const userGetFavoriteMoviesReducer=(state={likedMovies:[]},action)=>{
        switch (action.type){
            case User.GET_FAVORITE_MOVIES_REQUEST:
                return {isLoading:true}
            case User.GET_FAVORITE_MOVIES_SUCCESS:
                return {isLoading:false ,likedMovies:action.payload}
            case User.GET_FAVORITE_MOVIES_FAIL:
                return{isLoading:false , isError:action.payload}
            case User.GET_FAVORITE_MOVIES_RESET:
                return{}
                default:
                    return state}
        }
 
//delete favorites Movies
export const userDeleteFavoriteMoviesReducer=(state={},action)=>{
    switch(action.type){
        case User.DELETE_FAVORITE_MOVIES_REQUEST:
            return{isLoading:true}
        case User.DELETE_FAVORITE_MOVIES_SUCCESS:
            return{isLoading:false , isSuccess:true}
        case User.DELETE_FAVORITE_MOVIES_FAIL:
            return {isLoading:false , isError:action.payload}
        case User.DELETE_FAVORITE_MOVIES_RESET:
            return{}
            default:
                return state
    }
}

//ADMIN GET ALL USERS
export const adminGetAllUsersReducer=(state={users:[]},action)=>{
    switch (action.type){
    case User.GET_ALL_USERS_REQUEST:
        return{isLoading:true}
    case User.GET_ALL_USERS_SUCCESS:
        return {isLoading:false , users:action.payload}
    case User.GET_ALL_USERS_FAIL:
        return {isLoading : false , isError : action.payload}
    case User.GET_ALL_USERS_RESET:
        return{
            users:[],
        }
        default:
            return state
    }
}

//ADMIN DELETE USER
export const adminDeleteUserReducer=(state={},action)=>{
    switch (action.type){
    case User.DELETE_USER_REQUEST:
        return {isLoading:true};
    case User.DELETE_USER_SUCCESS:
        return {isLoading:false , isSuccess:true}
    case User.DELETE_USER_FAIL:
        return {isLoading : false , isError:action.payload}
    case User.DELETE_USER_RESET:
        return{}
        default:
            return state
    }
}
