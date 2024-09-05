import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployerDashboard from './pages/EmployerDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/employer-dashboard">Employer Dashboard</Link>
          </nav>
          <Routes>
            <Route path="/" element={<p>Welcome to the Home Page!</p>} />
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            <Route path="/employer-dashboard" element={<EmployerDashboard />} /> {/* Added path for Employer Dashboard */}
          </Routes>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;