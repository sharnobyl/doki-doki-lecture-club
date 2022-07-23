import React, { useState, useEffect } from "react";
import "./video.css";
import axios from "axios";

function Video(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [lectureData, setLectureData] = useState([
    {
      lectureLink: "https://www.youtube.com/embed/gPPxfPThq20",
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
      <iframe
        src={lectureData[props.selectedVideo].lectureLink}
        frameBorder="0"
        title="YouTube video player"
        height="315"
        width="560"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        scrolling="0"
      >
        Browser not compatible
      </iframe>
      <div class="title">
        <h1 id="name">{lectureData[props.selectedVideo].lectureTitle}</h1>
        <h1 id="subject">{lectureData[props.selectedVideo].subject}</h1>
      </div>
    </div>
  );
}

export default Video;
