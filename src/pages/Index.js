/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';

import Main from '../layouts/Main';
import Typewriter from '../components/Typewriter';
import Blurb from '../components/Blurb';

const Index = () => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <Main
      description={
      "Kevin Mao's personal website. New York based Stanford ICME graduate, "
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
      typingDone={typingDone}
      landingPage
      fullPage
    >
      <section id="landing">
        <div className="center">
          <Typewriter text="Hi there.      I'm Kevin Mao." delay={75} onTypingDone={() => setTypingDone(true)} />
          <Blurb hideTitle />
        </div>
      </section>
    </Main>);
};

export default Index;
