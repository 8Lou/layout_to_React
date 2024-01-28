import React from 'react';
import Header from './components/Header';
import Main from './components/Slider';
import { wideImages } from './assets/carouselData';
// import img from './assets/img/0.jpeg'

const App = () => {
  return (
    <div>
      <Header />
      {/* <div><img src={img}></img></div> */}
      <Main img={wideImages}></Main>
    </div>
  );
};

export default App;
