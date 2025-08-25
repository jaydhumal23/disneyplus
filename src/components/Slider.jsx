import React, { useEffect, useState, useRef } from "react";
import Globalapi from "../services/Globalapi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
export default function Slider() {
  const Movie_Url = "https://image.tmdb.org/t/p/original";
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  const Dimension = window.innerWidth;
  useEffect(() => {

    getMovies();
  }, []);

  const getMovies = () => {

    Globalapi.Movies.then((respo) => {

      setMovieList(respo.data.results);

    });
  };

  const slideRight = (element) => {

    element.scrollLeft += Dimension-110;


  };
  const slideLeft = (element) => {

    element.scrollLeft -= Dimension-110;
  };
  return (
 
        <div>
      
  <HiChevronLeft
        className="text-gray-400 absolute mx-6 left-0  mt-[150px] 2xl:mt-[195px]  text-5xl cursor-pointer  max-md:hidden"
        onClick={() => {

          slideLeft(elementRef.current)

        }}
      />
      <HiChevronRight
        className="text-gray-400 absolute mx-4 right-0  mt-[150px] 2xl:mt-[195px]  text-5xl cursor-pointer  max-md:hidden"
        onClick={() => {


          slideRight(elementRef.current)




        }}
      />
   
    <div className='flex overflow-x-auto w-full px-16 py-4 max-sm:px-2
    scrollbar-hide scroll-smooth' ref={elementRef}> 
        {movieList.map((item)=>(
            <img src={Movie_Url+item.backdrop_path} 
            className='min-w-full  2xl:h-[420px] md:h-[350px] object-cover 
            object-left-top mr-5 rounded-md '/>
        ))}
    </div>
    </div>
  );
}
