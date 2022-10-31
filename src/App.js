import React from 'react';

import { About, Footer, Header, Games, Platforms } from './container/';
import { Navbar } from './components/';
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Games />
      <About />
      <Platforms />
      <Footer />
    </div>
  );
}

export default App