import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import BlogFeed from './BlogFeed';

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <Header />
        <BlogFeed />
        <Footer />
      </div>
    );
  }
}

export default App;
