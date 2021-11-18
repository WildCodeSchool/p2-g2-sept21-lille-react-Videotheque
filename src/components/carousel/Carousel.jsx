import { Slide } from 'react-slideshow-image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './carousel.css';

const Carousel = () => {
  const [moviePics, setMoviePics] = useState([]);
  const [properties, setProperties] = useState({
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    canSwipe: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    scale: 1.5,
  });

  useEffect(() => {
    setProperties({
      ...properties,
      slidesToShow: window.matchMedia('(min-width: 780px)').matches ? 5 : 1,
    });
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=1'
      )

      .then(({ data }) => {
        setMoviePics(data.results);
      });
  }, [window.innerWidth]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=1'
      )

      .then(({ data }) => {
        setMoviePics(data.results);
      });
  }, []);

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
