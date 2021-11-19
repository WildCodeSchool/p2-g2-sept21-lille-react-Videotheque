import Credits from './Credits';
import Team from './Team';
import SocialMedia from './SocialMedia';

import './footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <section className="links">
        <div className="keepnTeam">
          <ul>
            <li>Team</li>
            <li>
              <Team />
            </li>
          </ul>
        </div>
        <div className="clientLink">
          <ul>
            <li> Wild &amp; Sons</li>
            <li>
              <SocialMedia />
            </li>
          </ul>
        </div>
        <div className="credits">
          <ul>
            <li>Credits</li>
            <li>
              <Credits />
            </li>
          </ul>
        </div>
      </section>
      <div className="legalMentions">
        <p>
          Made with <span className="heart">-♥-</span> in 2021
        </p>
        <p>
          For Wild Code School Lille,4 avenue des Saules, Bât le Doge, 59000
          Lille
        </p>
      </div>
    </section>
  );
};

export default Footer;
