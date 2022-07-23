import React, { useState } from "react";
import "./video.css";

function Video() {
  const [display, setDisplay] = useState(
    "https://www.youtube.com/embed/Ev4_YB4HDrc"
  );

  function changeDisplay() {
    if (display === "https://www.youtube.com/embed/nWtCTpJG6E4") {
      setDisplay("https://www.youtube.com/embed/Ev4_YB4HDrc");
    } else {
      setDisplay("https://www.youtube.com/embed/nWtCTpJG6E4");
    }
  }

  return (
    <div>
      <iframe
        src={display}
        frameBorder="0"
        title="YouTube video player"
        height="315"
        width="560"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >Browser not compatible</iframe>
      <button onClick={() => changeDisplay()}>switcheroo</button>
    </div>
  );
}

export default Video;
