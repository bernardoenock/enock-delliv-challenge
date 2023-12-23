import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegisterForm';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<LoginForm />}
          />
          <Route
            path="/register"
            element={<RegistrationForm />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;