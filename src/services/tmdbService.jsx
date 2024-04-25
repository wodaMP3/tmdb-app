import axios from "axios";

const apiKey = import.meta.env.API_KEY;
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
