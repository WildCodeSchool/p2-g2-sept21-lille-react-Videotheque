import React from 'react';
import GithubProfile from './githubProfile';
import GithubMobile from './githubMobile';
import './footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="team">
        <span className="keepnteam">KeepN Team</span>
        <GithubProfile />
        <GithubMobile />
      </div>
      <div>
        <a href="https://www.wildcodeschool.com/fr-FR" className="wildAndSons">
          Wild and Sons
        </a>
      </div>
      <div>
        <a href="https://www.themoviedb.org/" className="creditslink">
          Credits
        </a>
      </div>
    </section>
  );
};

export default Footer;
