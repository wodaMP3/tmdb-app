import { useState } from 'react';
import AddFavourites from '../AddFavourites/AddFavourites';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {

    

    return (
        <Link to={`/movie/${movie.id}`}>
            <div className="movie-card">
                <div className='movie-card-flipped'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title} className="movie-img"/>
                </div>
                <div className='overlay'>
                    <Link to='/favourites'><AddFavourites /></Link>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard;