import React, { useState, useEffect } from "react";
import "./video.css";
import axios from "axios";

function Video(id) {
  const subject = "life"; // placeholder
  const [lectureData, setLectureData] = useState([
    {
      lectureLink: "https://www.youtube.com/embed/gPPxfPThq20",
    },
  ]);

  useEffect(
    () =>
      function fetchData() {
        axios.get("http://localhost:5000/lecture").then(function (response) {
          setLectureData(response.data);
        });
      }
  );

  return (
    <div class="videoplayer">
      <iframe
        src={lectureData[0].lectureLink}
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
        <h1 id="name">{lectureData[0].lectureTitle}</h1>
        <h1 id="subject">{subject}</h1>
      </div>
    </div>
  );
}

export default Video;
