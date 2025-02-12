/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';

import Main from '../layouts/Main';
import Blurb from '../components/Blurb';

const Home = () => (
  <Main
    description="Kevin Mao's personal website."
    fullPage
    landingPage={false}
  >
    <section id="landing">
      <div className="center">
        <h2>Hi there. I&apos;m Kevin Mao.</h2>
        <Blurb />
      </div>
    </section>
  </Main>);

export default Home;
