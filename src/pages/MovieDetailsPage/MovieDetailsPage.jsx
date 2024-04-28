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
            <h1 className="movie-title">{movieDetails.title}</h1>
                <p className="genres">{movieDetails.tagline}</p>
        </div>
    )
}

export default MovieDetailsPage;
