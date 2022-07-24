import './App.css';
import ChatBox from './components/chatbox/chatbox'
import { useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Video from './components/video/video'
import Topbar from './components/topbar/topbar';
import Jumpscare from './components/jumpscare/jumpscare';

function App() {

  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = (lectureKey) => {
    setSelectedVideo(lectureKey)
  }

  const togglePlaying = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="App">

      <Sidebar toggleVideo={toggleVideo} />
      <Video selectedVideo={selectedVideo} togglePlaying={togglePlaying} />
      <ChatBox selectedVideo={selectedVideo} playing={isPlaying} />
      <Topbar />
      <Jumpscare />
    </div>

  );
}

export default App;
