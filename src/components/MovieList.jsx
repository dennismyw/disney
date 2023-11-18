import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
function MovieList(genreId) {
        // eslint-disable-next-line no-undef
        const[movieList,setMovieList] = useState([])
        useEffect(()=>{
            getMovieByGenreId();
        },[])

        const getMovieByGenreId=()=>{
            GlobalApi.getMovieByGenreId(genreId).then(resp=>{
                console.log(resp.data.results)
                setMovieList(resp.data.results)
        })
    }

  return (
    <div className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3'>
        {movieList.map((item,index)=>(
            <MovieCard movie={item}/>
        ))}
    </div>
  )
}

export default MovieList