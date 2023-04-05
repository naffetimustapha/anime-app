import React, { useState } from 'react'
import {  BsBookmarkStarFill } from 'react-icons/bs'
import Titles from '../Home/Titles'
import { Message, Select } from '../Usedinputs'
import Star from '../Star'
const MovieRates = ({movie}) => {
    const Ratings =[
        {
         title:"0-Poor",
         value:0, 
         },
         {
            title:"1 - Fair",
            value:1,
         },
         {
            title:"2 - Good",
            value:2,
         },
         {
            title:"3 - Very Good",
            value:3,
         },
         {
            title:"4 - Excellent",
            value:4,
         },
         {
            title:"5 - Masterpiece",
            value:5,
         },
]

const [rating,setRating]=useState()


  return (
    <div className='my-12'>
        <Titles title="Review" Icon={BsBookmarkStarFill}/>
        <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded'>
            <div className='xl:col-span-2 w-full flex flex-col gap-8'>
                <h3 className='text-xl text-text text-font-semibold'>Review "{movie?.name}"</h3>
            <p className='text-sm leading-7 font-medium text-border'>
                Write a review for this movie .
            </p>     
            <div className='text-sm w-full'>
                <Select label="Select Rating" options ={Ratings} 
                onChange={(e)=>setRating(e.target.value)}/>
                <div className='flex mt-4 text-lg gap-2 text-star'>
                    <Star value={rating}/>
                </div> 
                </div>
                <div>
                    <Message label="message" placeholder="write your review here"/>
                    <button className="bg-subMain text-white py-3 w-full flex-colo rounded">
                        Submit
                    </button>
                </div>
                <div className="col-span-3 flex flex-col gap-6">
                    <h3 className="text-xl text-text font-semibold">Reviews(56)</h3>
                    
                </div>
           
            </div>
           
        
        </div>
    </div>
  )
}

export default MovieRates