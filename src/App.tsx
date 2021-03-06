import React from 'react';
//import logo from './logo.svg';
import './App.css';
import  Navbar from './app/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Router } from 'react-router-dom';
import Routes from './routes/Routes';
import history from './services/history';


function App() {
  return (
    <div className="App">
      <Router history={history}>
          <Navbar />
          <Routes />
      </Router>
    </div>
  );
}

export default App;
