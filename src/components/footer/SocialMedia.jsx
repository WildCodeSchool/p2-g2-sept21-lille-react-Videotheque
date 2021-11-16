import { ImFacebook } from 'react-icons/im';
import { RiHomeHeartLine } from 'react-icons/ri';

const SocialMedia = () => {
  return (
    <div className="wrapper">
      <div className="icon facebook">
        <a href="https://www.facebook.com/WildCodeSchool/" target="blank">
          <ImFacebook />
        </a>
        <div className="tooltip">Facebook</div>
      </div>
      <div className="icon website">
        <a href="https://www.wildcodeschool.com/fr-FR" target="blank">
          <RiHomeHeartLine />
        </a>
        <div className="tooltip">WebSite</div>
      </div>
    </div>
  );
};

export default SocialMedia;
