import { useEffect, useState } from 'react';
import axios from 'axios';
import './FicheFilm.css';
import { useParams } from 'react-router-dom';
/* import buttonTrailer from './play.png'; */
import star1 from './star1.png';
import star2 from './star2.png';
import star3 from './star3.png';
import star4 from './star4.png';
import star5 from './star5.png';
/* import buttonAdd from './add.png';
 */
export default function FicheFilm() {
  const [title, setTitle] = useState([]);
  const [voteAverage, setVoteAverage] = useState([]);
  const [numberVote, setNumberVote] = useState([]);
  const [poster, setPoster] = useState([]);
  const [backdrop, setBackdrop] = useState([]);
  const [director, setDirector] = useState([]);
  /* const [trailer, setTrailer] = useState([]); */
  const [overview, setOverview] = useState([]);
  const [runtime, setRuntime] = useState([]);
  const [releaseDate, setReleaseDate] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [providersRent, setProvidersRent] = useState([]);
  const [providersFlatrate, setProvidersFlatrate] = useState([]);
  const [providersBuy, setProvidersBuy] = useState([]);
  const { id } = useParams();
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
        `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=599ded6f0fc3bcaee1882e83ae0d438a`
      )

      .then(({ data }) => {
        setProvidersRent(data.results.FR.rent);
        setProvidersFlatrate(data.results.FR.flatrate);
        setProvidersBuy(data.results.FR.buy);
      })
      .catch(() => {
        setProvidersRent([]);
        setProvidersFlatrate([]);
        setProvidersBuy([]);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=599ded6f0fc3bcaee1882e83ae0d438a`
      )
      .then(({ data }) => {
        setDirector(data.crew);
        setActors(data.cast);
      })
      .catch(() => {
        setDirector(['']);
        setActors(['']);
      });
  }, []);

  /* useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=599ded6f0fc3bcaee1882e83ae0d438a`
      )
      .then(({ data }) => {
        setTrailer(data.results[0]);
      })
      .catch(() => {
        console.error('Erreur API');
      });
  }, []); */

  let UsersScorePictures;
  if (voteAverage === 10) {
    UsersScorePictures = star5;
  } else if (voteAverage < 10 && voteAverage >= 8) {
    UsersScorePictures = star4;
  } else if (voteAverage < 8 && voteAverage >= 6) {
    UsersScorePictures = star3;
  } else if (voteAverage < 6 && voteAverage >= 4) {
    UsersScorePictures = star2;
  } else if (voteAverage < 4) {
    UsersScorePictures = star1;
  }

  const hour = (runtime - (runtime % 60)) / 60;
  const min = (runtime / 60 - hour) * 60;

  return (
    <div className="movieResume">
      <img
        className="backgroundPoster"
        src={`https://image.tmdb.org/t/p/original${backdrop}`}
        alt="fond"
      />
      <div className="posterTrailer">
        <div className="titreVote">
          <div className="genres">
            <p>{title}</p>
            <p className="fufu">
              {genres.map((genre) => {
                return <p>{genre.name}</p>;
              })}
            </p>
          </div>
          <div className="vote">
            <img
              className="starScore"
              src={UsersScorePictures}
              alt="StarScore"
            />
            <p className="numberVote">{numberVote} votes</p>
          </div>
        </div>
        <div className="details">
          <div className="posterAndOverwiew">
            <div className="genresOverview">
              <p className="overview">{overview}</p>
              <div className="director">
                {typeof director !== 'undefined' ? (
                  <>
                    {director
                      .filter(
                        (job) =>
                          job.job === 'Director' &&
                          job.department === 'Directing'
                      )
                      .map((dir) => {
                        return <p> Director : {dir.name}</p>;
                      })}
                  </>
                ) : (
                  <p>Director : unknown</p>
                )}
                <p>
                  {hour} H {min}
                  <br /> ({releaseDate})
                </p>
              </div>
            </div>

            <div className="buttons">
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/original${poster}`}
                alt="trailer"
              />
              {/* <img className="buttonAdd" src={buttonAdd} alt="addCollection" />
            <a href={`https://www.youtube.com/embed/${trailer.key}`}>
            <img
            className="buttonTrailer"
            src={buttonTrailer}
            alt="playTrailer"
            />
          </a> */}
            </div>
          </div>
          <div className="directorTimeDate">
            <div className="Povide">
              <h3>Rent</h3>
              {typeof providersRent !== 'undefined' && (
                <>
                  {providersRent.map((providerRent) => {
                    return (
                      <img
                        className="PovIco"
                        src={`https://image.tmdb.org/t/p/original${providerRent.logo_path}`}
                        alt="{provider.provider_name}"
                      />
                    );
                  })}
                </>
              )}
            </div>
            <div className="Povide">
              <h3>Streaming</h3>
              {typeof providersFlatrate !== 'undefined' && (
                <>
                  {providersFlatrate.map((providerFlatrate) => {
                    return (
                      <img
                        className="PovIco"
                        src={`https://image.tmdb.org/t/p/original${providerFlatrate.logo_path}`}
                        alt="{provider.provider_name}"
                      />
                    );
                  })}
                </>
              )}
            </div>
            <div className="ProvideType">
              <h3 className>Buy</h3>
              {typeof providersBuy !== 'undefined' && (
                <>
                  {providersBuy.map((providerBuy) => {
                    return (
                      <img
                        className="PovIco"
                        src={`https://image.tmdb.org/t/p/original${providerBuy.logo_path}`}
                        alt="{provider.provider_name}"
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
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
