import { useEffect } from "react";
import { getPopularMovies } from "../../services/tmdbService";

const HomePage = () => {
    useEffect(()=> {
        const fetchPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                console.log('Popular movis', popularMovies);
            } catch (error) {
                console.error('Error fetching popular movies:', error)
            }
        };
        fetchPopularMovies();
    }, []);
    return (
        <div className="homePage">
            HomePage
        </div>
    )
}

export default HomePage;