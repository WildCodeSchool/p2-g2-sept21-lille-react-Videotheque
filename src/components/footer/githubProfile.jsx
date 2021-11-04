import githubIcon from './githubIcon.png';

const members = [
  {
    link: 'https://github.com/WildCodeSchool/p2-g2-sept21-lille-react-Videotheque',
    memberName: 'KeepN Team',
  },
  {
    link: 'https://github.com/BBriset',
    memberName: 'Bertrand',
  },
  {
    link: 'https://github.com/clairedelaleau',
    memberName: 'Claire',
  },
  { link: 'https://github.com/Othmane-Khiter', memberName: 'Othmane' },

  {
    link: 'https://github.com/Quentin-Macquart',
    memberName: 'Quentin',
  },

  {
    link: 'https://github.com/BenZen59',
    memberName: 'Benoît',
  },
];

const GithubProfile = () => {
  return (
    <div className="keepnBloc">
      {members.map((member) => (
        <div className="githubTeam">
          <a href={member.link}>
            <img src={githubIcon} alt="githubLogo" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default GithubProfile;
