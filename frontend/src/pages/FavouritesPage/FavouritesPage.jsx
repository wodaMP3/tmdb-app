import { query } from 'express';
import './FavouritesPage.css';

const FavouritesPage = async (userId) => {
  const db = getFirestore();
  try {
    const q = query(collection(db, `users/${userId}/favourites`));
    const querySnapshot = await getDocs(q);
    const favoriteMovies = [];
    querySnapshot.forEach((doc) => {
      favoriteMovies.push(doc.data());
    });
    return favoriteMovies;
  } catch (error) {
    console.error('failed to load fav movies:', error)
    return [];
  }
}

export default FavouritesPage;