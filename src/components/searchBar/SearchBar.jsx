import React from 'react';
import './Search.css';

function Search() {
  return (
    <div className="Search">
      <input
        className="SearchBar"
        type="search"
        placeholder="Search your movie"
      />
    </div>
  );
}

export default Search;
