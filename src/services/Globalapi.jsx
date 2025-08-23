import axios from "axios";
const token = import.meta.env.VITE_ACCESS_TOKEN;

let Movies = axios.get("https://api.themoviedb.org/3/movie/upcoming", {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },


});


export default { Movies };
