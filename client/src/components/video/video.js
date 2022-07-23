import React, { useState } from "react";

function Video() {
  const [display, setDisplay] = useState(
    "https://www.youtube.com/embed/Ev4_YB4HDrc"
  );

  function changeDisplay() {
    setDisplay("https://www.youtube.com/embed/nWtCTpJG6E4");
  }

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={display}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button onClick={() => changeDisplay()}>change video</button>
    </div>
  );
}

export default Video;
