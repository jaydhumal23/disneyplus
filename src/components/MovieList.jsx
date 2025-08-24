import React, { useEffect, useState } from 'react'
import Globalapi from '../services/Globalapi'
import MovieCard from './MovieCard'
function MovieList({ genreId }) {
    const [movielist, setMovielist] = useState([])
    useEffect(() => {
        getMovieByGenreId()
    }, [])
    const getMovieByGenreId = () => {
        Globalapi.getmoviebygenreId(genreId).then(respo => {
            // console.log(respo.data.results)
            setMovielist(respo.data.results)
        })
    }
    return (
        <div className='display flex gap-8 overflow-x-auto w-full scrollbar-hide scroll-smooth duration-100 transition-all p-4'>
            {movielist.map((data, index) => {
                return (
                    <div key={index }>

                     <MovieCard movie={data} />
                    </div>
            )

            })}


        </div>
    )
}

export default MovieList