import React from 'react'
import { Input } from '../../../Components/Usedinputs'
import { Message } from '../../../Components/Usedinputs'
import { Select } from '../../../Components/Usedinputs'
import SideBar from '../SideBar'
import Uploader from '../../../Components/Uploader'
import { categoriesData } from '../../../Data/categoriesData'
import {ImUpload} from 'react-icons/im'

const AddMovie = () => {
  return (
    <SideBar>
         <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold'> Create Movie</h2>
        <div className='w-full grid md:grid-cols-2 gap-6'>
        <Input label='name 'placeholder='' type='text' bg={true}/>
        <Input label='time' placeholder='' type='text' bg={true}/>
      </div>
      <div className='w-full grid md:grid-cols-2 gap-6'>
        <Input label='year'placeholder='' type='number' bg={true}/>
      </div>
      <div className='w-full grid md:grid-cols-2 gap-6'>
        <div className='flex flex-col gap-2'>
            <p className='text-border font-semibold text-sm'>
                image
            </p>
            <Uploader/>
            <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                <img src='/images/movies/Akira.jpg' alt='' className='w-full h-full object-cover rounded'/>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-border font-semibold text-sm'>
                imageTitle
            </p>
            <Uploader/>
            <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                <img src='/images/one Piece Z title.jpg' alt='' className='w-full h-full object-cover rounded'/>
            </div>
        </div>
        <Message label='Description' placeholder='' />
        <div className='text-sm w-full'>
            <Select label='Movie Category' options ={categoriesData}/>
        </div>
        </div>
        <button className='bg-subMain w-full flex-rows gap-6 font-medium transitions hover:bg-dry border border-subMain text-white py-4 rounded'>
            <ImUpload/> Create
        </button>
        </div>
    </SideBar>
  )
}

export default AddMovie