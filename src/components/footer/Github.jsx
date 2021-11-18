import { FiGithub } from 'react-icons/fi';

const Github = () => {
  return (
    <div className="wrapper">
      <div className="icon github">
        <a
          href="https://github.com/WildCodeSchool/p2-g2-sept21-lille-react-Videotheque"
          target="blank"
        >
          <FiGithub />
        </a>
        <div className="tooltip">Github</div>
      </div>
    </div>
  );
};

export default Github;
