import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const API_BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async() => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
            params: {
                api_key: apiKey,
                language: 'en-US',
                page: 1
            }
        })
        return response.data.results;

    }catch (error) {
        console.error('Failed to fetch popular movies:', error);
        return [];
    }
};

export const getMovieDetails = async(movieID) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/${movieID}`, {
            params: {
                api_key: apiKey,
                language: 'en-US',
            }
        })
        console.log(response.data)

        return response.data;
    } catch (error) {
        console.error('Failed to fetch movie details', error);
        return [];
    }
}