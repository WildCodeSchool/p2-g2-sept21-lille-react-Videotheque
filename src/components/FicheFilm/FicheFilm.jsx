import { useEffect, useState } from 'react';
import axios from 'axios';
import './FicheFilm.css';

export default function FicheFilm() {
  // Declare states
  const [title, setTitle] = useState([]);
  const [voteAverage, setVoteAverage] = useState([]);
  const [poster, setPoster] = useState([]);
  const [director, setDirector] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [overview, setOverview] = useState([]);
  const [runtime, setRuntime] = useState([]);
  const [releaseDate, setReleaseDate] = useState([]);
  const [actor1, setActor1] = useState([]);
  const [actor2, setActor2] = useState([]);
  const [actor3, setActor3] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/576845?api_key=599ded6f0fc3bcaee1882e83ae0d438a'
      )
      .then(({ data }) => {
        setTitle(data.original_title);
        setVoteAverage(data.vote_average);
        setPoster(data.poster_path);
        setOverview(data.overview);
        setRuntime(data.runtime);
        setReleaseDate(data.release_date);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/576845/credits?api_key=599ded6f0fc3bcaee1882e83ae0d438a'
      )
      .then(({ data }) => {
        setDirector(data.crew[5]);
        setActor1(data.cast[0]);
        setActor2(data.cast[1]);
        setActor3(data.cast[2]);
      })
      .catch(() => {
        console.error('Erreur API');
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/576845/videos?api_key=599ded6f0fc3bcaee1882e83ae0d438a'
      )
      .then(({ data }) => {
        setTrailer(data.results[0]);
      })
      .catch(() => {
        console.error('Erreur API');
      });
  }, []);

  const urlPoster = `https://image.tmdb.org/t/p/original${poster}`;
  const urlActor1 = `https://image.tmdb.org/t/p/original${actor1.profile_path}`;
  const urlActor2 = `https://image.tmdb.org/t/p/original${actor2.profile_path}`;
  const urlActor3 = `https://image.tmdb.org/t/p/original${actor3.profile_path}`;
  const urlVideo = `https://www.youtube.com/embed/${trailer.key}`;

  return (
    <div>
      <div className="titreVote">
        <p>{title}</p>
        <p className="vote">Users vote : {voteAverage}</p>
      </div>
      <div className="posterTrailer">
        <img src={urlPoster} alt="" />
        <iframe
          title="trailer"
          width="820"
          height="348"
          src={urlVideo}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
        />
      </div>
      <div className="directorTimeDate">
        <p>
          {director.job} : {director.name}
          <br />
          <br />
          {runtime} min ({releaseDate})
        </p>
      </div>
      <div className="actors">
        <div>
          <img src={urlActor1} alt="actor1" />
          <p>
            <span>{actor1.name}</span>
            <br />
            {actor1.character}
          </p>
        </div>
        <div>
          <img src={urlActor2} alt="actor2" />
          <p>
            <span>{actor2.name}</span>
            <br />
            {actor2.character}
          </p>
        </div>
        <div>
          <img src={urlActor3} alt="actor3" />
          <p>
            <span>{actor3.name}</span>
            <br />
            {actor3.character}
          </p>
        </div>
      </div>
      <p className="overview">{overview}</p>
    </div>
  );
}
