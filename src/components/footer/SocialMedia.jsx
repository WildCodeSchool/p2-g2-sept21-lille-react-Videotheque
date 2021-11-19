import { ImFacebook } from 'react-icons/im';
import { RiEarthFill } from 'react-icons/ri';

const SocialMedia = () => {
  return (
    <div className="wrapper">
      <div className="icon facebook">
        <a href="https://www.facebook.com/WildCodeSchool/" target="blank">
          <ImFacebook />
        </a>
        <div className="toolTip">Facebook</div>
      </div>
      <div className="icon website">
        <a href="https://www.wildcodeschool.com/fr-FR" target="blank">
          <RiEarthFill />
        </a>
        <div className="toolTip">WebSite</div>
      </div>
    </div>
  );
};

export default SocialMedia;
