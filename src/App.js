import './App.css';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import Home from './component/home/Home.js'
import MessageParser from './component/chatbot/MessageParser';
import Exit from './component/exit/Exit';
import ActionProvider from './component/chatbot/ActionProvider';
import config from './component/chatbot/config';
import Chatbot from 'react-chatbot-kit';
function App() {
  return (
    <div className="App">
          <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/exit" element={<Exit/>}/>
        <Route exact path="/chat" element={ <div style={{ maxWidth: "300px" }}>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
