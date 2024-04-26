import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPopularMovies } from "../../services/tmdbService";
import MovieCard from "../../components/MovieCard/MovieCard";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);    

    useEffect(()=> {
        const fetchPopularMovies = async () => {
            try {
                const movies = await getPopularMovies();
                setPopularMovies(movies);
            } catch (error) {
                console.error('Error fetching popular movies:', error)
            }
        };
        fetchPopularMovies();
    }, []);
    return (
        <div className="homePage">
            <Link to='/login'><button className="login-button">Sign In</button></Link>
            <h1 className="popular">Popular Movies</h1>
            <div className="movie-img"></div>
                {popularMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
        </div>
    )
}

export default HomePage;