import React, { Component } from 'react';
import Banner from './components/banner/banner.jsx';
import AboutMe from './components/aboutme/aboutme.jsx';
import Album from './components/album/album.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';

import './styles/shared.css';
import './styles/banner.css';
import './styles/about-me.css';
import './styles/album.css';

class App extends Component {
  render() {
    return (
      <div>
        <ParallaxProvider>
          <Banner />
          <AboutMe />
          <Album />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;