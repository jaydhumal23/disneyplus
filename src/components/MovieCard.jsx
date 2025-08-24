import React from 'react'
  const Movie_Url = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
    return (
        <div className='w-50 max-md:w-70 overflow-x-hidden  rounded-lg  '>
            <img src={Movie_Url+movie.poster_path} className='object-cover w-full h-full'/>

        </div>
    )
}

export default MovieCard