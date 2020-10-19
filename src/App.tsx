import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles'; 
import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <h1>Inicio do Projeto!</h1>

      <Routes>
        <Route path="/" element={ <Profile /> } />
        <Route path="/:username" element={ <Profile /> } />
        <Route path="/:username/:reponame" element={ <Repo /> } />
      </Routes>

      {/* <Footer /> */}
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
