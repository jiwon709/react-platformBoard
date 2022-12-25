import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Coffee from './Coffee';

function App() {
  return (
    <Router>
      <div>
        <header className='App-header'>
          <Link to={'/Coffee'}>커피 주문</Link>
          <Routes>
            <Route path='/Coffee' element={ <Coffee/> } />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
