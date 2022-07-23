import './App.css';
import ChatBox from './components/chatbox/chatbox'
import { useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Video from './components/video/video'
import Topbar from './components/topbar/topbar';
import Jumpscare from './components/jumpscare/jumpscare';

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
      <div className='viewSpace'>
        <Video />
        <ChatBox />
      </div>
      <Jumpscare />
    </div>

  );
}

export default App;
