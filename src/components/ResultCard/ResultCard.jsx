import React from 'react';
import './ResultCard.css';

const ResultCard = (movie) => {
  const { title, poster_path: posterPath } = movie;

  return (
    <div className="resultcard">
      <div className="poster">
        {posterPath ? (
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${posterPath}`}
            alt={`${title} Poster`}
          />
        ) : (
          <img
            src="https://via.placeholder.com/220x330?text=image+not+found"
            alt={`${title} Poster`}
          />
        )}
      </div>
      <div className="info">
        <h3 className="title">{title}</h3>
      </div>
    </div>
  );
};
export default ResultCard;
