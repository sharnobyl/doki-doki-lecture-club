import './App.css';
import ChatBox from './components/chatbox/chatbox'
import { useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Video from './components/video/video'
import Topbar from './components/topbar/topbar';

function App() {

  const [selectedVideo, setSelectedVideo] = useState(0);

  const toggleVideo = (lectureKey) => {
    setSelectedVideo(lectureKey)
  }

  return (
    <div className="App">

      <Sidebar toggleVideo={toggleVideo} />
      <Video selectedVideo={selectedVideo} />
      <Topbar />
      <Video />
      <ChatBox />
    </div>

  );
}

export default App;
