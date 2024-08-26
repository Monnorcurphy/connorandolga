import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import OurStory from './components/OurStory';
import Details from './components/Details';
import RSVP from './components/RSVP';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/details" element={<Details />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;