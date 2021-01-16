import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Happy from "./components/Happy"
import Sad from "./components/Sad"
import Angry from "./components/Angry"
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="page-container">
      <Header />
      <Router>
        <div className="content-wrap">
          <Route path="/" exact component={Jumbo} />
          <Route path="/home" component={Jumbo} />
          <Route path="/happy" component={Happy} />
          <Route path="/sad" component={Sad} />
          <Route path="/angry" component={Angry} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
