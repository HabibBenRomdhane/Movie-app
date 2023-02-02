import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

// 12b3431c

const API_URL = 'http://omdbapi.com?apikey=12b3431c';

// const movie1 = {
//     "Title": "Amazing Spiderman Syndrome",
//     "Year": "2012",
//     "imdbID": "tt2586634",
//     "Type": "movie",
//     "Poster": "N/A"
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => { 
        // asynchronous data which means it takes some time to fetch these movies
        // title we gonna search by.
        const response = await fetch(`${API_URL}&s=${title}`); // call the API
        // once we gonna get the response we're gonna get the data from it
        const data = await response.json();
        console.log(data); // to check the API if it works
        console.log(data.Search);

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('SpiderMan');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // callback function
                    placeholder="Search for movies"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {/* <MovieCard movie1={movie1} /> */}
                            {movies.map((movie) => ( // map over movies; a sigular movie for each iteration of the map
                                <MovieCard movie={movie} /> // movie prop
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )

            }


        </div>
    );
}

export default App;