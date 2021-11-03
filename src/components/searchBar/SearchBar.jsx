import Axios from 'axios';
import React, { useState } from 'react';
import ResultCard from '../ResultCard/ResultCard';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((response) => response.data)
      .then((data) => setResults(data.results))
      .catch(() => {
        setResults([]);
      });
  };

  return (
    <>
      <div className="search">
        <input
          className="searchBar"
          type="search"
          placeholder="Search your movie"
          value={query}
          onChange={onChange}
        />
      </div>
      {results.length > 0 && (
        <ul className="results">
          {results.map((movie) => (
            <li key={movie.id}>
              <ResultCard {...movie} />
            </li>
          ))}
        </ul>
      )}
      ;
    </>
  );
};

export default Search;
