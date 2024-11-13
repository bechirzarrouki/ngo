// src/components/AboutPage.js
import React from 'react';

// Import images
import raedImg from '../Assests/raed.jpg';
import bechirImg from '../Assests/bechir.jpg';
import eyaImg from '../Assests/eya.jpg';
import rouaImg from '../Assests/roua.jpg';
import yasmineImg from '../Assests/yasmine.jpg';

const AboutPage = () => (
  <div  className="team-list2">
    <h1>About Us</h1>
    <h2>Our Team</h2>
    <div className="team-list">
      <div className="team-member">
        <img src={raedImg} alt="Raed Nefzi" className="team-photo" />
        <p>Raed Nefzi - Executive Director</p>
      </div>
      <div className="team-member">
        <img src={bechirImg} alt="Bechir Zarrouki" className="team-photo" />
        <p>Bechir Zarrouki - Program Coordinator</p>
      </div>
      <div className="team-member">
        <img src={eyaImg} alt="Eya Latiri" className="team-photo" />
        <p>Eya Latiri - Communication Officer</p>
      </div>
      <div className="team-member">
        <img src={rouaImg} alt="Roua Dhafer" className="team-photo" />
        <p>Roua Dhafer - Fundraising Officer</p>
      </div>
      <div className="team-member">
        <img src={yasmineImg} alt="Yasmine Ben Abda" className="team-photo" />
        <p>Yasmine Ben Abda - HR Officer</p>
      </div>
    </div>
    <div className="tet1">
    <h2>Our Values</h2>
    <p>Inclusivity, collaboration, and transparency to create opportunities and promote decent work for all.</p>

    <h2>Vision</h2>
    <p>Connecting ideas and talent to reduce unemployment and drive sustainable growth.</p>
  </div>
  </div>
);

export default AboutPage;
