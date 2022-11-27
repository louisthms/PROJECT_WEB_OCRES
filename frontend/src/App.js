import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' />
          <Route path='/about' />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
