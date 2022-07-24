import React, { useState, useEffect } from "react";
import "./video.css";
import axios from "axios";
import YouTube,{YouTubeProps} from 'react-youtube'

function Video(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [lectureData, setLectureData] = useState([
    {
      lectureLink: "gPPxfPThq20",
    },
  ]);

  useEffect(
    () => {
        axios.get("http://localhost:5000/lecture").then(function (response) {
          setLectureData(response.data);
          setIsLoading(false);
        });
      }, []
  );

  if (isLoading) {
    return <p>Page loading</p>
  }

  return (
    <div class="videoplayer">
      <YouTube
        id="YouTube"
        videoId={lectureData[props.selectedVideo].lectureLink}
      >
        Browser not compatible
      </YouTube>
      <div class="title">
        <h1 id="name">{lectureData[props.selectedVideo].lectureTitle}</h1>
        <h1 id="subject">{lectureData[props.selectedVideo].subject}</h1>
      </div>
    </div>
  );
}

export default Video;
