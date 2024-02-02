import React from 'react';
import YouTube from 'react-youtube';

class YoutubeVideo extends React.Component {
  render() {

    return (
      <div className='youtube__blog'>
        <h2 class="video__title">
          WELCOME  TO  LOU  LEASING
        </h2>
        <p class="video__text">
          Find out how easy it is to lease from Lou Leasing
        </p>
        <div className='video__content'>
          <iframe width="900" height="500"
            src="https://www.youtube.com/embed/YPeZ4twEFTA?si=a-xW2AFkbhyQYWk_"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture; 
          web-share" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default YoutubeVideo;