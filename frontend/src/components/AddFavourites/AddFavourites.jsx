import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const favURL = `https://api.themoviedb.org/3/account/{account_id}/favorite`;
const bearer = import.meta.env.VITE_BEARER;

// const AddFavourites = ({ movie, onAddToFavourites }) => {





// 	const [data, setData] = useState(null);
	
// 	const handleFavourites = async () => {

// 		const fetchFavourites  = {
// 		method: 'POST',
// 		url: favURL, 
// 		headers: {
// 			account_id: 21235577,
// 			accept: 'application/json',
// 			'content-type': 'application/json',
// 			Authorization: `Bearer ${bearer}`
// 		}
// 	}

// 	try {
// 		const response = await axios.request(fetchFavourites);
// 		setData(response.data);
// 		console.log('Fetching favourites page is successfull:', response.data);
// 	} catch (error) {
// 		console.error('Failed to fetch favourites page:', error);
// 	}
// }	
	
export const AddFavourites = async (userId, movieId, movieData) => {
	const db = getFirestore();
	try {
		await addDoc(Collection(db, `users/${userId}/favourites`), {
			movieId: movieId,
			movieData: movieData
		});
		console.log('AddFavourites success');
	} catch (error) {
		console.error('failed to add favourites:', error)
	}
	
    return (
		<div className="favs-page">

		
            <span className="favourite" 
				onClick={handleFavourites}
				>Add to</span>
            <svg
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				className='bi bi-heart-fill'
				fill='red'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
			</svg>
        </div>
    )
}


export default AddFavourites;