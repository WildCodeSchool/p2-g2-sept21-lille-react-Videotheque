import { useState } from 'react';
import unwatchedMovie from './unwatchedMovie.png';
import watchedMovie from './watchedMovie.png';
import './watchlist.css';

const WatchCard = () => {
  const [isWatched, setIsWatched] = useState(false);

  return (
    <div className="watchBloc">
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
