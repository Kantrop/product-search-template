import React from 'react';
import { Logo } from './components/assets';
import { MainPage } from './containers/MainPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={Logo} className="App-logo" alt="logo" />
      <MainPage />
    </div>
  );
}

export default App;
