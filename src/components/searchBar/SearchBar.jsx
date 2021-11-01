import Axios from 'axios';
import React, { useState } from 'react';
import Resultcard from '../ResultCard/Resultcard';
import './Search.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=fr-FR&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((response) => response.data)
      .then((data) => setResults(data.results))
      .catch(() => {
        console.error('Erreur API');
        setResults([]);
      });
  };

  return (
    <>
      <div className="Search">
        <input
          className="SearchBar"
          type="searchtext"
          placeholder="Search your movie"
          value={query}
          onChange={onChange}
        />
      </div>

      {results.length > 0 && (
        <ul className="results">
          {results.map((movie) => (
            <li key={movie.id}>
              <Resultcard {...movie} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchBar;
