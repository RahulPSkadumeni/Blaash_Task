// src/ReelsVideo.tsx
import React from "react";

import "./Video.css";
import BackgroundVideo from "./BackgroundVideo";

type Props = {
  feed: any;
  index: number;
};

const Video = (props: Props) => {
  // console.log(props?.feed?.EngagementPostId);
  return (
    <div className="reels-video">
      <div className="video">
        <BackgroundVideo volumeMute={true} url={props.feed.Thumbnail_URL} />
      </div>
      <div className="ProductCategory">{props?.feed?.Thumbnail_Title}</div>
      {/*  */}
      <div className="playButton">
        <svg
          className="button"
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
        >
          <path
            d="M17.3247 19.6569V9.1521L26.4221 14.4045L35.5196 19.6569L26.4221 24.9094L17.3247 30.1618V19.6569Z"
            fill="white"
            stroke="white"
            stroke-width="2.40836"
            stroke-linejoin="round"
          />
        </svg>
        Click to Play
      </div>
    </div>
  );
};

export default Video;
