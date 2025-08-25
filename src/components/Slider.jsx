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

    element.scrollLeft += Dimension;


  };
  const slideLeft = (element) => {

    element.scrollLeft -= Dimension;
  };
  return (
    <div>
      <HiChevronLeft
        className="text-gray-400 absolute mx-[-8px] left-0  mt-[150px] 2xl:mt-[195px]  text-5xl cursor-pointer  max-md:hidden"
        onClick={() => {

          slideLeft(elementRef.current)

        }}
      />
      <HiChevronRight
        className="text-gray-400 absolute mx-[-8px] right-0  mt-[150px] 2xl:mt-[195px]  text-5xl cursor-pointer  max-md:hidden"
        onClick={() => {


          slideRight(elementRef.current)




        }}
      />
      <div className="overflow-x-auto flex scrollbar-hide scroll-smooth  transition-all duration-100 " ref={elementRef}>
        {movieList.map((items) => (
          <div className="px-8 max-md:px-2 min-w-full">
          <div key={items.id} className="2xl:h-[420px] md:h-[350px]   my-6 rounded-2xl max-md:rounded-md overflow-hidden  w-full ">
            
          
          <img
            
            src={Movie_Url + items.backdrop_path}
            className="w-full h-full  object-cover object-top"
          />
          </div></div>
        ))}
      </div>
    </div>
  );
}
