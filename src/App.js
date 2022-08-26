import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'
const Api_url = 'http://www.omdbapi.com?apikey=14037f83'
// now we can use the data of this api

// const movie1 = 
//     {
//         "Title": "Barbie as Rapunzel",
//         "Year": "2002",
//         "imdbID": "tt0313255",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BNjViZmY0M2MtODUzNy00MjRiLTlhYjQtMjQ4ZDY3ZWFkYWE4XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
//     }



const App=()=>{

const [ movies , setMovies] = useState([])
const [searchTerm , setSearchTerm] = useState('')

    const searchMovies = async (title) =>{
        const response = await fetch(`${Api_url}&s=${title}`);
        const data = await response.json();
        console.log(data)

        setMovies(data.Search)
    }

    useEffect(()=>{
        searchMovies('barbie')
    },[])
    return(
        <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
        <input
            placeholder="search for movies"
            value = {searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <img
            src={SearchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}
        /> 

        </div>
{ movies.length>0 ?
        <div className="container">
       {movies.map((movie)=>(
        <MovieCard movie={movie}/>
       ))}
        </div> : 
        <div className="empty">
            <h2>No movies found</h2>
        </div>
}

        </div>
    );
}

export default App;