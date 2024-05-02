import { useState } from "react";
import { Link } from "react-router-dom";

const AddFavourites = ({ movie, onAddToFavourites }) => {
	
	const handleAddToFavourites = () => {
		if (typeof onAddToFavourites === 'function'){
			onAddToFavourites(movie);
		}
	}

    return (
        <>

		<Link to={'/favourites'}>
            <span className="favourite" 
				onClick={handleAddToFavourites}
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
			</Link>
        </>
    )
}

export default AddFavourites;