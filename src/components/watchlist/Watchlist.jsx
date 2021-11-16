import { useState } from 'react';
import WatchCard from './WatchCard';
import WatchlistContext from './contexts/WatchlistContext';
import './watchlist.css';
// Le but est à partir du bouton "+", faire un push dans le tableau vide > STOCKER LA DONNEE
// donc faire un setMyWatchlist() au clic
// myWatchlist.push(LE.film);

const Watchlist = () => {
  const [moviesTest, setMoviesTest] = useState([]);

  function deleteMovie(id) {
    const filteredMovies = moviesTest.filter(
      (movieTest) => movieTest.id !== id
    );
    setMoviesTest(filteredMovies);
  }

  return (
    <WatchlistContext.Provider
      value={{
        moviesTest,
        setMoviesTest,
        deleteMovie,
      }}
    >
      <div className="Watchlist">
        <WatchCard />
      </div>
    </WatchlistContext.Provider>
  );
};

export default Watchlist;
