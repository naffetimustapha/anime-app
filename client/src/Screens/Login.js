import React,{ useEffect } from 'react'
import Layout from '../Layout/Layout'
import {Input} from '../Components/Usedinputs'
import { Link,useNavigate } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import {useDispatch,useSelector} from 'react-redux'
import {useForm} from "react-hook-form"
import {LoginValidation} from "../Components/Validation/UserValidation"
import {yupResolver} from "@hookform/resolvers/yup"
import {loginAction} from "../Redux/Actions/userActions"
import {InlineError} from "../Components/Notifications/Error"
import toast from "react-hot-toast"
const Login = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()

  const{isLoading, isError,userInfo,isSuccess}=useSelector((state)=>state.userLogin)
  const {register,handleSubmit,formState:{errors},
}=useForm({resolver:yupResolver(LoginValidation)})

const onSubmit=(data)=>{
 dispatch (loginAction(data))
}
useEffect(()=>{
  if(userInfo?.isAdmin){
    navigate("/dashboard")
  }
  else if (userInfo){
    navigate("/profile")
  }
  if(isSuccess){
toast.success(`welcome back ${userInfo?.fullName}`)
  }
  if(isError){
    toast.error(isError)
    dispatch({type:"USER_LOGIN_RESET"})
  }
},[userInfo , isSuccess , isError , navigate , dispatch])
  return (
    <Layout>
    <div className='container mx-auto px-2 my-24 flex-colo'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border'>
            <img src='https://mumu-global.fp.ps.easebar.com/file/62660fb2d448e3406f84b27d9ixJIWRk02' alt='logo' className='w-full object-contain'/>
            
            <div className='w-full'>
            <Input label='Email' 
            placeholder='nerdyZ@gmail.com' 
            type='email' 
            name='email'
            register={register("email")}
            bg={true}/>
            {
              errors.email && 
           <InlineError text={errors.email.message}/>
            }
</div>

<div className='w-full'>
            <Input label='password' 
            placeholder='******' 
            type='password' 
            name='password'
            bg={true}
            register={register("password")}
            />
            {
              errors.password && 
           <InlineError text={errors.password.message}/>
            }
</div>


           <button type ='submit' 
           disabled={isLoading}
           className='bg bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'>
               {
                isLoading ? ("Loading..."):(<>   <FiLogIn/> Sign In</>)
               }
            
               
               
            </button>
           <p> don't have account ? {' '}
            <Link to='/register' className='text-dryGry font-semibold ml-2'>
              Sign Up</Link> 
            </p>
          
            
        </form>
    </div>
    </Layout>
  )
}

export default Login