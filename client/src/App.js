import './App.css';
// import ChatBox from './components/chatbox/chatbox.js'
import Sidebar from './components/sidebar/sidebar';
import Video from './components/video/video.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          doki doki dunking on u
        </h1>
      </header>

      <Sidebar></Sidebar>
      {/* <ChatBox /> */}
      <Video />
    </div>
  );
}

export default App;
