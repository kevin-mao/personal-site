/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';

import Main from '../layouts/Main';
import Blurb from '../components/Blurb';

const Home = () => (
  <Main
    description={
      "Kevin Mao's personal website. New York based Stanford ICME graduate, "
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
    fullPage
  >
    <section id="landing">
      <div className="center">
        <Blurb />
      </div>
    </section>
  </Main>);

export default Home;
