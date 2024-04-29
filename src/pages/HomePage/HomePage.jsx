import { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/tmdbService";
import MovieCard from "../../components/MovieCard/MovieCard";
import FavouritesPage from "../FavouritesPage/FavouritesPage";

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

    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (movie) => {
        if (!favourites.map((fav)=> fav.id === movie.id)) {
            setFavourites([...favourites, movie])
        }
        console.log(setFavourites);
    }
    
    return (
        <div className="homePage">
            <h1 className="popular">Popular Movies</h1>
            <div className="movie-img"></div>
                {popularMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} onClick={addToFavourites}/>
                ))}
            <FavouritesPage favourites={favourites}/>
        </div>
    )
}

export default HomePage;