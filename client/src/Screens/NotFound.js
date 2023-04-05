import React from 'react'
import {Link} from 'react-router-dom'
import {BiHomeAlt} from 'react-icons/bi'
const NotFound = () => {
  return (
    <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
     <img className='w-full h-96 object-contain' 
     src="https://c4.wallpaperflare.com/wallpaper/353/811/750/technology-404-404-not-found-hd-wallpaper-thumb.jpg" 
     alt=''/>
     <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
     <Link to='/' className='bg-subMain transitions text-white flex-rows gap-4 font-medium py-3 hover:text-main px-4 rounded-md'> <BiHomeAlt/>GO Back Home</Link>
   
</div>
  )
}

export default NotFound