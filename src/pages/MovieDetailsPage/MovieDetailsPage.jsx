import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/tmdbService";

const MovieDetailsPage = () => {
    let { id } = useParams();

    const [movieDetails, setMovieDetails] = useState({});

    useEffect(()=> {
        const fetchMovieDetails = async () => {
            try {
                const details = await getMovieDetails(id);
                setMovieDetails(details);
            } catch (error) {
                console.error('Error fetching movie details:', error)
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div className="movieDetails">
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} />
            <h1 className="movie-title">{movieDetails.title}</h1>
                <p>Overview: {movieDetails.overview}</p>
                <p>Genres:</p>
                    <ul className="genres">
                    {movieDetails.genres && movieDetails.genres.map((genre, index) => (
                    <li key={index}>{genre.name}</li>
                ))}
                    </ul>
                <p>{movieDetails.vote_average}</p>
                <p className="runtime">runtime: {movieDetails.runtime}m</p>
                <p>original  language: {movieDetails.original_language}</p>
                <p>tagline: {movieDetails.tagline}</p>
                <p>status: {movieDetails.status}</p>
                <p>total votes: {movieDetails.vote_count}</p>
        </div>
    )
}

export default MovieDetailsPage;
