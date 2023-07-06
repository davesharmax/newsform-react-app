import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pagesize={6} country="in" category="general" />
        {/* <Router> */}
        {/* <Navbar/>
          <Routes>
            <Route exact path="/" element={<News pagesize={6} country="in" category="general" />} />
            <Route exact path="/sports" element={<News pagesize={6} country="in" category="sports" />} />
            <Route exact path="/health" element={<News pagesize={6} country="in" category="health" />} />
            <Route exact path="/technology" element={<News pagesize={6} country="in" category="technology" />} />
            <Route exact path="/science" element={<News pagesize={6} country="in" category="science" />} />
          </Routes>
        </Router> */}
      </div>
    );
  }
}
