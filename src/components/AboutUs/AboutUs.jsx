import React from 'react';
import Bertrand from './pictures/Bertrand.jpg';
import Claire from './pictures/Claire.jpg';
import Othmane from './pictures/Othmane.jpg';
import Quentin from './pictures/Quentin.jpg';
import Benoit from './pictures/Benoit.jpg';
import './AboutUs.css';

const members = [
  {
    link: 'https://github.com/BBriset',
    picture: Bertrand,
    name: 'Bertrand',
  },
  {
    link: 'https://github.com/clairedelaleau',
    picture: Claire,
    name: 'Claire',
  },
  {
    link: 'https://github.com/Othmane-Khiter',
    picture: Othmane,
    name: 'Othmane',
  },
  {
    link: 'https://github.com/Quentin-Macquart',
    picture: Quentin,
    name: 'Quentin',
  },
  {
    link: 'https://github.com/BenZen59',
    picture: Benoit,
    name: 'Benoît',
  },
];

function AboutUs() {
  return (
    <>
      <h2 className="title">Our Team</h2>
      <div className="container">
        {members.map((member) => {
          return (
            <div className="member">
              <img src={member.picture} alt={member.name} />
              <a href={member.link} target="_blank" rel="noreferrer">
                <h3 className="firstname">{member.name}</h3>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AboutUs;
