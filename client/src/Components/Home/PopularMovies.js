import React from 'react'
import Titles from './Titles'
import {BsCollectionFill} from 'react-icons/bs'
import Movie from './Movie'
import { movies } from '../../Data/movieData'
const PopularMovies = () => {
  return (
    <div className='my-16'>
      <Titles title ="popular and Movies" Icon={BsCollectionFill}/>
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-col-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {movies.slice(0.8).map((movie,index)=>(
          <Movie key={index} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default PopularMovies