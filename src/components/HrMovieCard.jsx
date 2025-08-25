import React from 'react'

const Movie_Url = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
    return (
        <div className='hover:scale-108 transition-all duration-500'>
            <div className='w-104  h-60 max-md:h-30 max-md:w-50 overflow-hidden  rounded-lg hover:border-3 hover:border-gray-400  cursor-pointer shadow-2xl shadow-gray-800  '>
                <img src={Movie_Url + movie.backdrop_path} className='object-cover w-full h-full hover:scale-108 transition-all duration-300' />

            </div>
            
            <h2 className='text-gray-300 text-xl font-semibold pl-3 max-md:text-sm mt-3'>{movie.title}</h2>
        </div>
    )
}

export default HrMovieCard