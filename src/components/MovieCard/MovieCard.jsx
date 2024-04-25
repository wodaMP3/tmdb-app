

const MovieCard = ({ movie }) => {
    return (
        <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={movie.title} className="movie-img" />
            <div className="p-4">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-overview">{movie.overview}</p>
            </div>
            <div className="movie-votes">
                <span className="">{movie.vote_average}</span>
            </div>
        </div>
    )
}

export default MovieCard;