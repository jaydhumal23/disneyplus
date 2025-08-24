import React from 'react'
  const Movie_Url = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
    return (
        <div className='w-50 max-md:w-40 overflow-hidden  rounded-lg hover:border-3 hover:border-gray-400 transition-all duration-500 cursor-pointer shadow-2xl shadow-gray-800 hover:scale-108 '>
            <img src={Movie_Url+movie.poster_path} className='object-cover w-full h-full hover:scale-110 transition-all duration-300'/>

        </div>
    )
}

export default MovieCard;