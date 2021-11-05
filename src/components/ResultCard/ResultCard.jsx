import './ResultCard.css';
import { Link } from 'react-router-dom';

const ResultCard = (movie) => {
  const { title, poster_path: posterPath, id } = movie;
  const poster = posterPath
    ? `https://image.tmdb.org/t/p/w220_and_h330_face${posterPath}`
    : `https://via.placeholder.com/220x330?text=${title} Poster`;

  return (
    <Link to={`/FicheFilm/${id}`} className="resultCard">
      <img className="poster" src={poster} alt={`${title} Poster`} />

      <div className="info">
        <h3 className="title">{title}</h3>
      </div>
    </Link>
  );
};
export default ResultCard;
