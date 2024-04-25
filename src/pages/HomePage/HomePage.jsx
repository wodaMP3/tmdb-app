import { useEffect, useState } from "react";
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
            <h1 className="text-3x-1 font-bold mb-4">Popular Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
                {popularMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
        </div>
    )
}

export default HomePage;