import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieDetails } from "../../services/tmdbService";


const MovieDetailsPage = () => {
    let { id } = useParams();

    const [movieDetails, setMovieDetails] = useState;

    useEffect(()=> {
        const fetchPopularMovies = async () => {
            try {
                const movies = await getMovieDetails();
                setMovieDetails(movies);
            } catch (error) {
                console.error('Error fetching movie details:', error)
            }
        };
        fetchPopularMovies();
    }, []);


    return (
        <div className="movieDetails">
            <h1 className="movie-title"></h1>
            
        </div>
    )
}