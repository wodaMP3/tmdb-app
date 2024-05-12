import { useEffect, useState } from 'react';
import { collection, getDocs, query, getFirestore } from 'firebase/firestore';
import './FavouritesPage.css';

const FavouritesPage = ({ userId }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        const q = query(collection(db, `users/${userId}/favourites`));
        const querySnapshot = await getDocs(q);
        const favoriteMoviesData = [];
        querySnapshot.forEach((doc) => {
          favoriteMoviesData.push(doc.data());
        });
        setFavoriteMovies(favoriteMoviesData);
      } catch (error) {
        console.error('Failed to load favorite movies:', error);
      }
    };

    fetchFavoriteMovies();
  }, [userId, db]);

  return (
    <div className="favourites-page">
      <h2>Favourite Movies</h2>
      <ul>
        {favoriteMovies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
