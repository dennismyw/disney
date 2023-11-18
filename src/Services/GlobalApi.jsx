import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='1007b4939dbffab02ec3893025b16841'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=1007b4939dbffab02ec3893025b16841';

//https://api.themoviedb.org/3/trending/all/day?api_key=1007b4939dbffab02ec3893025b16841
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}