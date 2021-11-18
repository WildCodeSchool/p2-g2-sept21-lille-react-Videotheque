import { useState } from 'react';
import watchedMovie from './watchedMovie.png';
import unwatchedMovie from './unwatchedMovie.png';
import './watchlist.css';

const WatchCard = () => {
  const [isWatched, setIsWatched] = useState(false);

  return (
    <div className="WatchBloc">
      <button
        onClick={() => {
          setIsWatched(!isWatched);
        }}
        type="button"
        className="ticket"
      >
        <img src={isWatched ? watchedMovie : unwatchedMovie} alt="ticket" />
      </button>
    </div>
  );
};

export default WatchCard;
