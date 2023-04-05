import React, { useState } from 'react'
import Movie from '../Components/Home/Movie'
import Filters from '../Components/Filters'
import { movies } from '../Data/movieData'
import Layout from '../Layout/Layout'
import { CgSpinner } from 'react-icons/cg'

const MoviesPages = () => {
  const maxPage=8
  const [page,setPage]= useState(maxPage)
  const HandleLoadingMore=()=>{
    setPage(page + maxPage)
  }
  return (
    <Layout>
        <div className='min-height-screen container mx-auto px-2 my-6'>
        <Filters/>
        <p className='text-lg font-medium my-6'>
          total<span className='font-bold text-subMain'>{movies?.length}</span>{' '} items Found
        </p>
        <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
          {movies.slice(0,page)?.map((movie,index)=>(
            <Movie key={index} movie={movie}/>
          ))}
        </div>
        <div className='w-full flex-colo md:my-20 my-10'>
          <button onClick={HandleLoadingMore} className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain'>
            Loading More <CgSpinner className='animate-spin'/>
          </button>
        </div>
        </div>
    </Layout>
  )
}

export default MoviesPages