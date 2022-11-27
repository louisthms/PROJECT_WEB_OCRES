import './App.css';
import Navbar from './components/navbar/navbar';
import Dashboard from './components/dashboard/dashboard';
import RightSide from './components/rightSide/rightSide';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Dashboard />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
