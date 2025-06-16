import React, { useEffect, useState } from "react"
import Globalapi from "../services/Globalapi"
export default function Slider() {
    const Movie_Url = "https://image.tmdb.org/t/p/original"
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getMovies()
    }, []);
    const getMovies = () => {
        Globalapi.Movies.then((respo) => {

            setMovieList(respo.data.results)

        })
    }

    return (
        <div className=" overflow-x-auto flex scrollbar-hide ">
            {movieList.map((items, index) => (<img src={Movie_Url + items.backdrop_path} className="min-w-full  2xl:h-[550px] h-[350px] object-cover p-4 rounded-4xl" />))}

        </div>)


}
