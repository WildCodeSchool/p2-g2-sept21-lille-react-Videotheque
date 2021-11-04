import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './carousel.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Carousel = () => {
  const [moviePics, setMoviePics] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=1'
      )
      .then((response) => response.data)
      .then((data) => {
        setMoviePics(data.results);
      });
  }, []);

  const properties = {
    duration: 10000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    canSwap: true,
  };

  return (
    <section className="slideContain">
      <Slide {...properties}>
        {moviePics.map((moviePic) => {
          const urlMovie = `https://image.tmdb.org/t/p/original/${moviePic.poster_path}`;
          return (
            <div className="imgContain">
              <img
                className="popMovieImg"
                src={urlMovie}
                alt={moviePic.original_title}
              />
            </div>
          );
        })}
      </Slide>
    </section>
  );
};

export default Carousel;
