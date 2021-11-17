import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import WatchCard from './WatchCard';
import './watchlist.css';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const newList = JSON.parse(localStorage.getItem('watchlist'));
    if (newList) setWatchlist(newList);
  }, []);

  const deleteFromWatchlist = () => {
    const myNewWatchList = watchlist.filter((movie) => {
      return movie.Id !== id;
    });
    setWatchlist(myNewWatchList);
  };

  return (
    <main>
      {watchlist.map((movie) => {
        return (
          <>
            <Link to={`/FicheFilm/${movie.Id}`}>
              <div className="WatchCard">
                <p className="movieTitle">{movie.Title}</p>
                <img
                  className="watchImg"
                  src={movie.PosterPath}
                  alt="Watchlist Movie Poster"
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={deleteFromWatchlist}
              className="buttonRemove"
            >
              <span className="buttonText+or-">Removie!</span>
            </button>
            <WatchCard />
          </>
        );
      })}

      {!watchlist.length && <p className="noMovies">No movies added!</p>}
    </main>
  );
}
