import './App.css';
import ChatBox from './components/chatbox/chatbox'
import { useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Video from './components/video/video'
import Topbar from './components/topbar/topbar';
import Jumpscare from './components/jumpscare/jumpscare';

function App() {

  const [selectedVideo, setSelectedVideo] = useState(0);

  const toggleVideo = (lectureKey) => {
    setSelectedVideo(lectureKey)
  }

  return (
    <div className="App">
        
      <Sidebar toggleVideo={toggleVideo} />
      <Video selectedVideo={selectedVideo} />
      <ChatBox />
      <Topbar />
      <Jumpscare />
    </div>

  );
}

export default App;
