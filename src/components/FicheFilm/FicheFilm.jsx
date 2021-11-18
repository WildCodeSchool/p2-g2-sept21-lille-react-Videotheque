import { useEffect, useState } from 'react';
import axios from 'axios';
import './FicheFilm.css';
import { useParams } from 'react-router-dom';
import star1 from './star1.png';
import star2 from './star2.png';
import star3 from './star3.png';
import star4 from './star4.png';
import star5 from './star5.png';

export default function FicheFilm() {
  const [titles, setTitle] = useState([]);
  const [voteAverages, setVoteAverage] = useState([]);
  const [numberVotes, setNumberVote] = useState([]);
  const [posters, setPoster] = useState([]);
  const [backdrops, setBackdrop] = useState([]);
  const [director, setDirector] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [overview, setOverview] = useState([]);
  const [runtimes, setRuntime] = useState([]);
  const [releaseDates, setReleaseDate] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=599ded6f0fc3bcaee1882e83ae0d438a`
      )
      .then(({ data }) => {
        setTitle(data.original_title);
        setVoteAverage(data.vote_average);
        setNumberVote(data.vote_count);
        setPoster(data.poster_path);
        setBackdrop(data.backdrop_path);
        setOverview(data.overview);
        setRuntime(data.runtime);
        setReleaseDate(data.release_date);
        setGenres(data.genres);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=599ded6f0fc3bcaee1882e83ae0d438a`
      )
      .then(({ data }) => {
        setDirector(data.crew[5]);
        setActors(data.cast);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=599ded6f0fc3bcaee1882e83ae0d438a`
      )
      .then(({ data }) => {
        setTrailer(data.results[0]);
      });
  }, []);

  const Star = () => {
    if (voteAverages === 10) {
      return star5;
    }
    if (voteAverages < 10 && voteAverages >= 8) {
      return star4;
    }
    if (voteAverages < 8 && voteAverages >= 6) {
      return star3;
    }
    if (voteAverages < 6 && voteAverages >= 4) {
      return star2;
    }
    return star1;
  };

  useEffect(() => {
    const newList = JSON.parse(localStorage.getItem('watchlist'));
    if (newList) setWatchlist(newList);
  }, []);

  const addToWatch = () => {
    const foundMovie = {
      Id: id,
      Title: titles,
      PosterPath: `https://image.tmdb.org/t/p/original${backdrops}`,
    };
    const newWList = [...watchlist, foundMovie];
    setWatchlist(newWList);
  };

  const deleteToWatch = () => {
    const newWList = watchlist.filter((film) => {
      return film.Id !== id;
    });
    setWatchlist(newWList);
  };

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const Runtime = () => {
    if (runtimes > 59) {
      const hour = (runtimes - (runtimes % 60)) / 60;
      const min = Math.round(((runtimes % 60) - hour) * 60 * 100) / 100;
      return `${hour} H ${min} `;
    }
    return `${runtimes} min`;
  };

  return (
    <div className="movieMainBloc">
      <div className="titleVote">
        <p>{titles}</p>
        <p className="vote">
          <img className="starScore" src={Star()} alt="starScore" />
          <br />
          <div className="numberVote">{numberVotes} votes</div>
        </p>
      </div>
      <div className="posterTrailer">
        <img
          className="backgroundPoster"
          src={`https://image.tmdb.org/t/p/original${backdrops}`}
          alt="banner"
        />
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/original${posters}`}
          alt="trailer"
        />
        <div className="directorTimeDate">
          <p>
            {director.job} :
            <br />
            {director.name}
          </p>
          <p>
            {Runtime()}
            <br /> ({releaseDates})
          </p>
        </div>

        <div className="genresOverview">
          <div className="genres">
            {genres.map((genre) => {
              return <p>{genre.name}</p>;
            })}
          </div>
          <p className="overview">{overview}</p>
        </div>
      </div>

      <div className="buttons">
        {watchlist.find((movie) => movie.Id === id) ? (
          <button type="button" onClick={deleteToWatch} className="buttonAdd">
            <span className="buttonText+or-">Removie!</span>
          </button>
        ) : (
          <button type="button" onClick={addToWatch} className="buttonAdd">
            <span className="buttonText+or-">Add to Watch!</span>
          </button>
        )}

        <a href={`https://www.youtube.com/embed/${trailer.key}`}>
          <div className="buttonTrailer" alt="Trailer">
            <div className="playTriangle" />
          </div>
        </a>
      </div>

      <div className="actors">
        {actors
          .filter((actor) => actor.order < 3)
          .map((actor) => {
            return (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                  alt="actor"
                />
                <p>
                  <span>{actor.name}</span>
                  <br />
                  {actor.character}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
