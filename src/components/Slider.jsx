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
        className="text-gray-500 absolute mx-[-8px] left-0  mt-[150px] 2xl:mt-[180px]  text-5xl cursor-pointer  max-md:hidden"
        onClick={() => {

          slideLeft(elementRef.current)

        }}
      />
      <HiChevronRight
        className="text-gray-500 absolute mx-[-8px] right-0  mt-[150px] 2xl:mt-[180px]  text-5xl cursor-pointer  max-md:hidden"
        onClick={() => {


          slideRight(elementRef.current)




        }}
      />
      <div className="overflow-x-auto flex scrollbar-hide scroll-smooth transition-all duration-100 " ref={elementRef}>
        {movieList.map((items) => (
          
          <img
            key={items.id}
            src={Movie_Url + items.backdrop_path}
            className="min-w-full  2xl:h-[420px] md:h-[350px] object-cover object-top px-8 py-6 rounded-[50px]"
          />
        ))}
      </div>
    </div>
  );
}
