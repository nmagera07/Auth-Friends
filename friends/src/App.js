import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, } from 'react-router-dom'
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './components/authRouter'

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/protected">Friends</Link>
      </nav>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Friends} />
      </Router>
    </div>
  );
}

export default App;
