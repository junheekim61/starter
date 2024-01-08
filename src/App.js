import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import * as React from 'react';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Reset />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
