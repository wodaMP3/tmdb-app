import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className="movie-card">
                <div className='movie-card-flipped'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title} className="movie-img" />
                    <div className="info">
                        <h2 className="movie-title">{movie.title}</h2>
                    </div>
                    <div className="movie-votes">
                        <span className="">{movie.vote_average}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard;