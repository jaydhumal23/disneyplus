import React from 'react'
import GenreList from "../Constant/GenresList.jsx"
import MovieList from './MovieList.jsx'
function GenreMovieList() {

  return (
    <div className='  '>
        
{GenreList.genere.map((data,index)=>index<=4&&(
    <div key={index} className='px-8 py-4 max-md:px-1 ' >
        <h2 className='text-2xl text-gray-200 font-bold'>{data.name}
        </h2>
        <MovieList genreId={data.id} index_={index} />
        
        </div> 
))}
       
       </div>
  )
}

export default GenreMovieList