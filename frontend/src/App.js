import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home'
import Recherche from './components/recherche/recherche'
import Contacts from './components/contacts/contacts'
import Virements from './components/virements/virements'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recherche' element={<Recherche />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/virement' element={<Virements />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
