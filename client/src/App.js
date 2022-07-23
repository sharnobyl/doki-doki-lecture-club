import './App.css';
// import ChatBox from './components/chatbox/chatbox.js'
import Sidebar from './components/sidebar/sidebar';
import Video from './components/video/video.js'
import Topbar from './components/topbar/topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <Video />
    </div>
    
  );
}

export default App;
