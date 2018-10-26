import React, { Component } from 'react';
import { Parallax } from 'react-materialize';

import Banner from './components/banner/banner.jsx';
import AboutMe from './components/aboutme/aboutme.jsx';
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
class App extends Component {
  render() {
    return (
      <div>
        <ParallaxProvider>
          <Banner />

          <AboutMe />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;