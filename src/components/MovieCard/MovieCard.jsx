import './MovieCard.css';

const MovieCard = ({ movie }) => {
    return (
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
    )
}

export default MovieCard;