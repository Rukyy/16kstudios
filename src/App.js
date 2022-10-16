import './App.css';
import NavBar from './navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <Router>
      <div className="App">
          { <NavBar />}
          <Home />
      </div>
    </Router>
    
  );
}

export default App;
