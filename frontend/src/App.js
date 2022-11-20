import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <div className="navbar">
            <ul>
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </div>
          <Routes>
            <Route exact path='/' />
            <Route path='/contact' />
            <Route path='/about' />
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;
