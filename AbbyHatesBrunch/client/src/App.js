import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MainPage from './MainPage';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
