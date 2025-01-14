import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kevin Mao</h2>
        <p>
          <a href="mailto:imkevinmao@gmail.com">imkevinmao@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Kevin. I am a{' '}
        <a href="https://www.engineering.columbia.edu/">Columbia Engineering </a> graduate, Columbia Startup Lab
        alumnus, and a Software Engineer at Microosft.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Kevin Mao.
      </p>
    </section>
  </section>
);

export default SideBar;
