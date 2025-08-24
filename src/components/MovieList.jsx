import React, { useEffect, useState, useRef } from 'react'
import Globalapi from '../services/Globalapi'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
function MovieList({ genreId }) {
    const [movielist, setMovielist] = useState([])
    const elementRef = useRef();
    useEffect(() => {
        getMovieByGenreId()
    }, [])
    const getMovieByGenreId = () => {
        Globalapi.getmoviebygenreId(genreId).then(respo => {
            // console.log(respo.data.results)
            setMovielist(respo.data.results)
        })
    }
    const slideRight = (element) => {
        console.log(window.innerWidth)
        element.scrollLeft += 500;
    }
    const slideLeft = (element) => {
        console.log(window.innerWidth)
        element.scrollLeft -= 500;
    }
    return (
        <div>
            <HiChevronLeft className='text-gray-500 absolute mx-[-8px] mt-[120px] left-0 cursor-pointer text-5xl max-md:hidden'
                onClick={() => {
                    slideLeft(elementRef.current)
                }} />
            <HiChevronRight className='text-gray-500 absolute mx-[-10px] right-0 mt-[120px] text-5xl cursor-pointer max-md:hidden z-1'
                onClick={() => {
                    slideRight(elementRef.current)
                }} />
            <div className='display flex gap-8 overflow-x-auto w-full scrollbar-hide scroll-smooth duration-100 transition-all p-4' ref={elementRef}>
                {movielist.map((data, index) => {
                    return (
                        <div key={index}>

                            <MovieCard movie={data} />
                        </div>
                    )

                })}


            </div>
        </div>

    )
}

export default MovieList