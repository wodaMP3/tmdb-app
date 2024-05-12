import { getFirestore, addDoc, collection } from 'firebase/firestore';

const AddFavourites = async (userId, movieId, movieData) => {
    const db = getFirestore();
    try {
        if (movieData) {
            await addDoc(collection(db, `users/${userId}/favourites`), {
                movieId: movieId,
                movieData: movieData
            });
            console.log('AddFavourites success');
        } else {
            console.error('movieData is undefined');
        }
    } catch (error) {
        console.error('failed to add favourites:', error)
    }
};

export default AddFavourites;
