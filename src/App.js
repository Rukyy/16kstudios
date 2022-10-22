import './App.css';
import NavBar from './navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Footer from './footer';


function App() {
  return (
    <Router>
      <div className="App">
          { <NavBar />}
          <Home />
          <Footer />
          <div className="copyright"><b>&copy;copyright</b></div>
      </div>
    </Router>
    
  );
}

export default App;
