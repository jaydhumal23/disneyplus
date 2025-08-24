import React from 'react'
  const Movie_Url = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
    return (
        <div className='w-50 max-md:w-70 overflow-hidden  rounded-lg hover:border-3 hover:border-gray-400 transition-all duration-300 cursor-pointer shadow-2xl shadow-gray-700 '>
            <img src={Movie_Url+movie.poster_path} className='object-cover w-full h-full hover:scale-108 transition-all duration-300'/>

        </div>
    )
}

export default MovieCard