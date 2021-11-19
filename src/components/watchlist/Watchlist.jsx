import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WatchCard from './WatchCard';
import './watchlist.css';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const newList = JSON.parse(localStorage.getItem('watchlist'));
    if (newList) setWatchlist(newList);
  }, []);

  const deleteFromWatchlist = (movieId) => {
    const myNewWatchList = watchlist.filter((movie) => {
      return movie.Id !== movieId;
    });
    setWatchlist(myNewWatchList);
  };

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <div className="watchlist">
      <h1 className="myWatchlist">My Watchlist</h1>
      {watchlist.map((movie) => {
        return (
          <ul className="watchContainer">
            <li className="movieCard">
              <section className="watchCard">
                <Link to={`/FicheFilm/${movie.Id}`}>
                  <div className="titleFrame">
                    <p className="movieTitle">{movie.Title}</p>
                  </div>
                  <img
                    className="watchImg"
                    src={movie.PosterPath}
                    alt="Watchlist Movie Poster"
                  />
                </Link>
              </section>
              <section className="rightPart">
                <div className="providers">
                  {movie.Provider1 && (
                    <img
                      className="providerImg"
                      src={`https://image.tmdb.org/t/p/original${movie.Provider1}`}
                      alt="Streaming icon"
                    />
                  )}
                  {movie.Provider2 && (
                    <img
                      className="providerImg"
                      src={`https://image.tmdb.org/t/p/original${movie.Provider2}`}
                      alt="Streaming icon"
                    />
                  )}
                </div>

                <div className="ticketAndRemove">
                  <div className="openAndClosedTicket">
                    <WatchCard />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      deleteFromWatchlist(movie.Id);
                    }}
                    className="buttonRemove"
                  >
                    <span className="buttonText">Remove!</span>
                  </button>
                </div>
              </section>
            </li>
          </ul>
        );
      })}

      {!watchlist.length && (
        <div className="noMovies">
          <img
            className="noMoviesGif"
            src="https://c.tenor.com/5aE5T7edBz4AAAAC/the-simpsons-homer-simpson.gif"
            alt="GIF No movies"
          />
          <p className="noMoviesTitle">
            No movies added <br />
            ... Add some!
          </p>
        </div>
      )}
    </div>
  );
}
