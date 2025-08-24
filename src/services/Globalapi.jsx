import axios from "axios";
const token = import.meta.env.VITE_ACCESS_TOKEN;
const key = import.meta.env.VITE_ACCESS_KEY;

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=' + key;

let Movies = axios.get("https://api.themoviedb.org/3/movie/upcoming", {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },


});

const getmoviebygenreId = (id) => (
  axios.get(movieByGenreBaseURL + "&with_genres=" + id)
)
export default { Movies, getmoviebygenreId };
