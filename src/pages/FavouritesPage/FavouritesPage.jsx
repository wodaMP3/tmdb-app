

const FavouritesPage = ({ favourites }) => {

    if (!favourites || favourites.length === 0) {
        return <div>No fav movies</div>
    }

    return (
        <div className="favourites-page">
            <h1>Fav movies</h1>
            <ul>
                {favourites.map((movie)=> (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
} 

export default FavouritesPage;