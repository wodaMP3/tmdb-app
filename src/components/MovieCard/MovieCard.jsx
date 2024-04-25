

const MovieCard = ({ movie }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={movie.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
                <p className="text-gray-700">{movie.overview}</p>
            </div>
            <div className="bg-gray-200 text-gray-800 text-center p-2">
                <span className="inline-block text-sm">{movie.vote_average}</span>
            </div>
        </div>
    )
}

export default MovieCard;