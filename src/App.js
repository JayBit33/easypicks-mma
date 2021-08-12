import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

// Components
import EasyPicks from './components/EasyPicks';
import Header from './components/Header';
import Home from './components/Home';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/easy-picks' element={<EasyPicks />} />
    </Routes>
    <GlobalStyle />
  </Router>
);


export default App;
