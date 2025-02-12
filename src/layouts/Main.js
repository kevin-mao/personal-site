/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | Kevin Mao"
      defaultTitle="Kevin Mao"
      defer={false}
    >
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    {props.fullPage
      ? <>
        {(props.typingDone || !props.landingPage) && <Navigation />}{props.children} </>
      : <div id="wrapper">
        <Navigation />
        <div id="main">{props.children}</div>
        <SideBar />
      </div>}
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  typingDone: PropTypes.bool,
  landingPage: PropTypes.bool,
};

Main.defaultProps = {
  children: null,
  fullPage: true,
  title: null,
  description: "Kevin Mao's personal website.",
  typingDone: false,
  landingPage: true,
};

export default Main;
