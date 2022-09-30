import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cricbuzz from "../src/component/Cricbuzz"
import GetMatches from './component/GetMatches';
function App() {
  return (
    <div className="App">
      <Router>
        <GetMatches/>
      </Router>
    </div>
  );
}

export default App;
