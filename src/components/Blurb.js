import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';
import data from '../data/contact';

const Blurb = ({ hideTitle }) => (
  <>
    <section id="blurb">
      <div className="container">
        <div className="row" style={{ maxWidth: '50em' }}>
          <div className="col-md-8 center">
            <Link to="/home" className="logo">
              <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt="" />
            </Link>
          </div>

          <div className="col-md-4" style={{ padding: '1em' }}>
            <header>
              {!hideTitle && <h2>Hi there. I&apos;m Kevin Mao.</h2>}
              <p>
                <a href="mailto:imkevinmao@gmail.com">imkevinmao@gmail.com</a>
              </p>
            </header>
            <section className="blurb">
              <p>
                I&apos;m a computer science student (class of 2021) at
                <a
                  href="https://engineering.columbia.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  Columbia University
                </a>
                . I was born to Chinese immigrant parents in Miami, raised in
                Brooklyn, moved to Staten Island, and currently attend school in
                Manhattan. I&apos;m an aspiring software engineer and I&apos;m
                passionate about coding for a cause, so I&apos;m always working
                on new <a href="/projects">projects</a>. On the side, I like to
                rock climb, explore NYC with my camera, and bartend gigs.
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
              <ul className="icons">
                {data.map((s) => (
                  <li key={s.label}>
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  </>
);

Blurb.propTypes = {
  hideTitle: PropTypes.bool.isRequired,
};

export default Blurb;
