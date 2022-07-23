import React, { useState, useEffect } from "react";
import "./video.css";
import axios from "axios";

function Video(id) {
  const [display, setDisplay] = useState(
    "https://www.youtube.com/embed/Ev4_YB4HDrc"
  );
  const [name, setName] = useState("ayo what the dog doing");
  const [subject, setSubject] = useState("life");
  const [lectureData, setLectureData] = useState([{
    lectureLink: "https://www.youtube.com/embed/gPPxfPThq20"
  }]);

  function changeDisplay() {
    if (display === "https://www.youtube.com/embed/nWtCTpJG6E4") {
      setDisplay("https://www.youtube.com/embed/Ev4_YB4HDrc");
      setName("ayo what the dog doin?");
      setSubject("life");
    } else {
      setDisplay("https://www.youtube.com/embed/nWtCTpJG6E4");
      setName("some 284 shit");
      setSubject("SOFTENG 284");
    }
  }

  useEffect(
    () =>
      function fetchData() {
        axios.get("http://localhost:5000/lecture").then(function (response) {
          setLectureData(response.data);
          console.log(lectureData)
          console.log(lectureData[0].lectureLink)
        });
      }
  );

  return (
    <div>
      <div class="videoplayer">
        <iframe
          src={lectureData[0].lectureLink}
          frameBorder="0"
          title="YouTube video player"
          height="315"
          width="560"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
          Browser not compatible
        </iframe>
        <div class="title">
          <h1 id="name">{name}</h1>
          <h1 id="subject">{subject}</h1>
        </div>
      </div>
      <button onClick={() => changeDisplay()}>switcheroo</button>
    </div>
  );
}

export default Video;
