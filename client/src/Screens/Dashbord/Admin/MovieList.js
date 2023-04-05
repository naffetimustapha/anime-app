import React from 'react'
import Table from '../../../Components/Table'
import { movies } from '../../../Data/movieData'
import SideBar from '../SideBar'

const MovieList = () => {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
    <div className='flex-btn gap-2'>
    <h2 className='text-xl font-bold'>Movies List</h2>
    <button className='bg-main font-medium transition hover:bg-subMain border border-subMain text-white py-3 px-6 rounded '>
        Delete All
    </button>
    </div>
    <Table data={movies} admin={true}/>
</div>
    </SideBar>
  )
}

export default MovieList