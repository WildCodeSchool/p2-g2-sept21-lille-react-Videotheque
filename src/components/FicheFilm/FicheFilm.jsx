import { useEffect, useState } from 'react';
import axios from 'axios';
import './FicheFilm.css';
import buttonTrailer from './play.png';
import star1 from './star1.png';
import star2 from './star2.png';
import star3 from './star3.png';
import star4 from './star4.png';
import star5 from './star5.png';
import buttonAdd from './add.png';

export default function FicheFilm() {
  const [titles, setTitles] = useState([]);
  const [voteAverages, setVoteAverages] = useState([]);
  const [numberVotes, setNumberVotes] = useState([]);
  const [posters, setPosters] = useState([]);
  const [backdrops, setBackdrops] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [overviews, setOverviews] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [releaseDates, setReleaseDates] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/576845?api_key=599ded6f0fc3bcaee1882e83ae0d438a'
      )
      .then(({ data }) => {
        setTitles(data.original_title);
        setVoteAverages(data.vote_average);
        setNumberVotes(data.vote_count);
        setPosters(data.poster_path);
        setBackdrops(data.backdrop_path);
        setOverviews(data.overview);
        setRuntimes(data.runtime);
        setReleaseDates(data.release_date);
        setGenres(data.genres);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/576845/credits?api_key=599ded6f0fc3bcaee1882e83ae0d438a'
      )
      .then(({ data }) => {
        setDirectors(data.crew[5]);
        setActors(data.cast);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/576845/videos?api_key=599ded6f0fc3bcaee1882e83ae0d438a'
      )
      .then(({ data }) => {
        setTrailers(data.results[0]);
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

  const hour = (runtimes - (runtimes % 60)) / 60;
  const min = (runtimes / 60 - hour) * 60;

  return (
    <div>
      <div className="titreVote">
        <p>{titles}</p>
        <div className="vote">
          <img className="starScore" src={Star()} alt="StarScore" />
          <div className="numberVote">{numberVotes} votes</div>
        </div>
      </div>
      <div className="posterTrailer">
        <img
          className="backgroundPoster"
          src={`https://image.tmdb.org/t/p/original${backdrops}`}
          alt="fond"
        />
        <div className="directorTimeDate">
          <p>
            {directors.job} :
            <br />
            {directors.name}
          </p>
          <p>
            {hour} H {min}
          </p>
          <p>({releaseDates})</p>
        </div>
        <div className="buttons">
          <img className="buttonAdd" src={buttonAdd} alt="addCollection" />
          <a href={`https://www.youtube.com/embed/${trailers.key}`}>
            <img
              className="buttonTrailer"
              src={buttonTrailer}
              alt="playTrailer"
            />
          </a>
        </div>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/original${posters}`}
          alt="trailer"
        />

        <div className="genresOverview">
          <div className="genres">
            {genres.map((genre) => {
              return <p>{genre.name}</p>;
            })}
          </div>
          <p className="overview">{overviews}</p>
        </div>
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
