import './App.css';
import { useState } from 'react';
// import ChatBox from './components/chatbox/chatbox.js'
import Sidebar from './components/sidebar/sidebar';
import Video from './components/video/video.js'
import Topbar from './components/topbar/topbar';

function App() {

  const [selectedVideo, setSelectedVideo] = useState(1);

  const toggleVideo = (videoId) => {
    setSelectedVideo(videoId)
  }

  return (
    <div className="App">

      <Sidebar toggleVideo={toggleVideo} />
      <Video selectedVideo={selectedVideo} />
      <Topbar />
    </div>

  );
}

export default App;
