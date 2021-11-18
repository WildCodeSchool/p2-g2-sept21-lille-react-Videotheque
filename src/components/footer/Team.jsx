import { Link } from 'react-router-dom';
import { RiTeamFill } from 'react-icons/ri';

const Team = () => {
  return (
    <div className="wrapper">
      <div className="icon github">
        <Link to="/AboutUs" className="linkAboutUs" target="blank">
          <RiTeamFill />
        </Link>
        <div className="toolTip">About Us</div>
      </div>
    </div>
  );
};

export default Team;
