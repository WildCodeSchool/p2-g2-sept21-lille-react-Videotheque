import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import WatchlistContext from './contexts/WatchlistContext';
import unwatchedMovie from './unwatchedMovie.png';
import watchedMovie from './watchedMovie.png';
import './watchlist.css';

const WatchCard = () => {
  const { moviesTest, setMoviesTest, deleteMovie } =
    useContext(WatchlistContext);
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=2'
      )

      .then(({ data }) => {
        setMoviesTest(data.results);
      });
  }, []);

  return (
    <div className="WatchBloc">
      {moviesTest.map((movieTest) => {
        const urlMovie = `https://image.tmdb.org/t/p/original/${movieTest.backdrop_path}`;
        return (
          <ul className="watchCard">
            {' '}
            <li key={movieTest.id}>
              <img
                className="watchImg"
                src={urlMovie}
                alt={movieTest.original_title}
              />

              <button
                onClick={() => {
                  setIsWatched(!isWatched);
                }}
                type="button"
                className="ticket"
              >
                <img
                  src={isWatched ? watchedMovie : unwatchedMovie}
                  alt="ticket"
                />
              </button>

              <button
                className="deleteButton"
                type="button"
                onClick={() => deleteMovie(movieTest.id)}
              >
                Delete?
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default WatchCard;
