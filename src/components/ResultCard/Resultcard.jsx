import React from 'react';

import './Resultcard.css';

const Resultcard = (movie) => {
  const { title, poster_path: posterPath } = movie;

  const test = (e) => {
    e.preventDefault();
    console.log('test');
  };
  return (
    <div
      className="resultCard"
      tabIndex={0}
      onKeyPress={test}
      role="button"
      onClick={test}
    >
      <div className="posterWrapper">
        <div>
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
      </div>

      <div className="info">
        <h3 className="title">{title}</h3>
      </div>
    </div>
  );
};

export default Resultcard;
