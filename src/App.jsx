import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { SliderImage } from './assets/carouselData';
// import img from './assets/img/0.jpeg'

const App = () => {
  return (
    <div>
      <Header />
      {/* <div><img src={img}></img></div> */}
      {/* <Main img={SliderImage}></Main> */}
      <Main />
    </div>
  );
};

export default App;
