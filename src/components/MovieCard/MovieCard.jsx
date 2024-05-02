import { useState } from 'react';
import AddFavourites from '../AddFavourites/AddFavourites';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, AddToFavourites}) => {


    return (
            <div className="movie-card">
                <div className='movie-card-flipped'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title} className="movie-img"/>
                </div>
                <div className='overlay'>
                    <AddFavourites movie={movie} onAddToFavourites={AddToFavourites}/>
                </div>
            </div>
    )
}

export default MovieCard;