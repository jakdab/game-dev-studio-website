import React from 'react';

/* final import output */

import { About, Footer, Header, Games, Platforms } from './container/';
import { Navbar } from './components/';
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      {/* <StickyNavbar /> */}
      <Navbar />
      <Header />
      <Games />
      <About />
      <Platforms />
      <Footer />
    </div>
  );
}

export default App;