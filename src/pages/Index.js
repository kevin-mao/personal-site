/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';

import Main from '../layouts/Main';
import Typewriter from '../components/Typewriter';
import Blurb from '../components/Blurb';

const Index = () => {
  if (window.innerWidth < 1281) {
    return (
      <Main
        description={
        "Kevin Mao's personal website. New York based Stanford ICME graduate, "
        + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
      }
        typingDone
        landingPage
        fullPage
      >
        <section id="landing">
          <div className="center">
            <h2>Hi there.      I&apos;m Kevin Mao</h2>
            <Blurb />
          </div>
        </section>
      </Main>);
  }

  const [typingDone, setTypingDone] = useState(false);
  const [visible, setVisible] = useState('invisible');

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
          <Typewriter text="Hi there.      I&apos;m Kevin Mao." delay={75} onTypingDone={() => { setTypingDone(true); setVisible('fadeIn'); }} />
          <div className={visible}>
            <Blurb />
          </div>
        </div>
      </section>
    </Main>);
};

export default Index;
