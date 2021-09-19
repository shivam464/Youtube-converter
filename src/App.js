import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Inputs from './components/Inputs';
// import { useEffect, useState } from 'react';
function App() {

  return (
    <div className="App">
      <Header/>
      <Inputs />
    </div>
  );
}

export default App;
