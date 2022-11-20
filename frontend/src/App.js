import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' />
            <Route path='/contact' />
            <Route path='/about' />
          </Routes>
        </Router>
        <div className="Dashboard">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
