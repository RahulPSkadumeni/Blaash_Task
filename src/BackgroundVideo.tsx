import React from "react";

import "./Video.css";

interface BackgroundVideoProps {
  url: string;
  volumeMute: boolean;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = (props) => {
  console.log("Props", props.url);
  console.log(props.volumeMute);

  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted={props.volumeMute}
        className="background-video"
      >
        <source src={props.url} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
