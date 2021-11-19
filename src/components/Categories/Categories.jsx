import { useEffect, useState } from 'react';
import axios from 'axios';
import ResultCard from '../ResultCard/ResultCard';
import './Categories.css';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genresIds, SetGenresIds] = useState([]);
  const randomYear = Math.floor(Math.random() * (2021 - 1980 + 1)) + 1980;

  const mov = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${randomYear}&with_watch_monetization_types=flatrate`
      )
      .then(({ data }) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US'
      )
      .then(({ data }) => {
        setCategories(data.genres);
        SetGenresIds(data.genres.id);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${randomYear}&with_watch_monetization_types=flatrate`
      )
      .then(({ data }) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      <div className="head">
        <h1 className="choose">
          {' '}
          Choose your movie, by our category section !{' '}
        </h1>{' '}
        <h2 className="year">Year : {randomYear}</h2>
      </div>
      <div className="categoriesContainer">
        {categories.map((category) => {
          return (
            <button
              className="categories"
              type="button"
              value={category.id}
              onClick={() => SetGenresIds(category.id)}
            >
              {category.name}
            </button>
          );
        })}
      </div>
      <div className="random">
        <button className="select" type="button" onClick={mov}>
          Change the selection
        </button>
      </div>
      <div className="moviesCategories">
        {movies
          .filter(
            (movie) =>
              movie.genre_ids[0] === genresIds ||
              movie.genre_ids[1] === genresIds ||
              movie.genre_ids[2] === genresIds ||
              movie.genre_ids[3] === genresIds ||
              movie.genre_ids[4] === genresIds
          )
          .map((movie) => {
            return (
              <li key={movie.id}>
                <ResultCard {...movie} />
              </li>
            );
          })}
      </div>
    </div>
  );
}
