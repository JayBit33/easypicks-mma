import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

// Components
import Account from './components/Account';
import EasyPicks from './components/EasyPicks';
import Header from './components/Header';
import Home from './components/Home';
import Picks from './components/Picks';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/easy-picks' element={<EasyPicks />} />
      <Route path='/picks' element={<Picks />} />
      <Route path='/account' element={<Account />} />
    </Routes>
    <GlobalStyle />
    <div className="footer">
      @copyright 2021 waveybits
    </div>
  </Router>
);


export default App;
