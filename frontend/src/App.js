import './App.css';
import Navbar from './components/navbar/navbar';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
