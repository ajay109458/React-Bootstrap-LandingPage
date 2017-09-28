import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js';
import Footer from './Footer.js';
import Header from './Header.js';
import ContentSectionA from './ContentSectionA.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Header />
        <ContentSectionA />
        <Footer />
      </div>
    );
  }
}

export default App;
