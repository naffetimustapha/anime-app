import React from 'react'
import { useParams } from 'react-router-dom'
import MovieInfo from '../Components/Single/MovieInfo'
import MovieRates from '../Components/Single/MovieRates'
import { movies } from '../Data/movieData'
import Layout from '../Layout/Layout'

const SingleMovie = () => {
    const {id}=useParams()
    const movie=movies.find((movie)=>movie.name===id)
  return (
    <Layout>
        <MovieInfo movie={movie}/>
        <div className='container mx-auto min-h-screen px-2 my-6'>        
        <MovieRates movie={movie}/>
        </div>

    </Layout>
  )
}

export default SingleMovie