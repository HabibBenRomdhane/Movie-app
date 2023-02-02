// there is no difference between .jsx and .js file, it's just when I build a component I use .jsx
import React from "react";

const MovieCard = ({ movie }) => { // the file name and the function name it's the same it's not a necesssity but it's a good practice.
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                 {/* 'N/A' this how the API declare movies that has no image. */}
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />  
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;