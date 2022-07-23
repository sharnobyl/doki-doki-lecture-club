import './App.css';
import ChatBox from './components/chatbox/chatbox'
import Sidebar from './components/sidebar/sidebar';
import Video from './components/video/video'
import Topbar from './components/topbar/topbar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Topbar />
      <div className='viewSpace'>
        <Video />
        <ChatBox />
      </div>
    </div>
    
  );
}

export default App;
