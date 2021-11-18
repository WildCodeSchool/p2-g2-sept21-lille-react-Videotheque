import { RiTeamFill } from 'react-icons/ri';

const Team = () => {
  return (
    <div className="wrapper">
      <div className="icon github">
        <a
          href="https://github.com/WildCodeSchool/p2-g2-sept21-lille-react-Videotheque"
          target="blank"
        >
          <RiTeamFill />
        </a>
        <div className="toolTip">About Us</div>
      </div>
    </div>
  );
};

export default Team;
