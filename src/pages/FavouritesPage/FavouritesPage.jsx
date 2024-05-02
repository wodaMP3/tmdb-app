import './FavouritesPage.css';

const FavouritesPage = ({ favourites }) => {

    if (!favourites || favourites.length === 0) {
        return <p className="no-favs">No fav movies</p>
    }

    return (
        <div className="favourites-page">
      <h1>Избранные фильмы</h1>
      <div className="movie-list">
        {favourites.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
    );
} 

export default FavouritesPage;