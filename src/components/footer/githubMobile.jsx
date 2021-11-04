import githubIcon from './githubIcon.png';

const team = [
  {
    link: 'https://github.com/WildCodeSchool/p2-g2-sept21-lille-react-Videotheque',
    memberName: 'KeepN Team',
  },
];

const githubMobile = () => {
  return (
    <div className="teamProfile">
      {team.map((e) => (
        <div className="githubMobile">
          <a href={e.link}>
            <img src={githubIcon} alt="Githublogo" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default githubMobile;
