import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home'
import Recherche from './components/recherche/recherche'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recherche' element={<Recherche />} />
          <Route path='/contact' />
          <Route path='/virement' />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
