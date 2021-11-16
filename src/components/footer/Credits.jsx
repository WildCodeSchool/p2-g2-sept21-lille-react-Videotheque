import { SiThemoviedatabase } from 'react-icons/si';

const Credits = () => {
  return (
    <div className="wrapper">
      <div className="icon credits">
        <a href="https://www.themoviedb.org/" target="blank">
          <SiThemoviedatabase />
        </a>
        <div className="tooltip">The Movie DataBase</div>
      </div>
    </div>
  );
};
export default Credits;
