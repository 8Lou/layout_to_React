import React from 'react';
import YouTube from 'react-youtube';

class YoutubeVideo extends React.Component {
  render() {
    const videoId = 'https://www.youtube.com/embed/0XoQ3W-yPPE?si=xWNgXGwvm3QDwyz3'  
    //  https://youtu.be/0XoQ3W-yPPE?si=itC8ItMsC75wzeCQ'; // замени YOUR_VIDEO_ID на ID нужного видео из Youtube

    const opts = {
      height: '315',
      width: '560',
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <YouTube videoId={videoId} opts={opts} />
    );
  }
}

export default YoutubeVideo;