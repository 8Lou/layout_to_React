import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import YoutubeVideo from './components/YoutubeVideo';
import { SliderImage } from './assets/carouselData';
import Footer from './components/Fotter';
// import img from './assets/img/0.jpeg'

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <YoutubeVideo />
      <Footer />
    </div>
  );
};

export default App;
