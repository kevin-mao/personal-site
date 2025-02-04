import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../data/contact';

const Blurb = () => (
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
              <p>
                <a href="mailto:imkevinmao@gmail.com">imkevinmao@gmail.com</a>
              </p>
            </header>
            <section className="blurb">
              <p>
                I am a Columbia Engineering graduate, Columbia Startup Lab alumnus,
                and currently I am a Software Engineer II at Microsoft, where I work on
                Azure Event Grid, Microsoft&apos;s premier pub/sub messaging cloud service.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/projects" className="button">
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
                      <FontAwesomeIcon icon={s.icon} size="lg" />
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

export default Blurb;
