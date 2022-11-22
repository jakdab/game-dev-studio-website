import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

/* final import output */

import { 
  About, 
  Footer, 
  Header, 
  Games, 
  Platforms 
} from './container/';

import { 
  Navbar 
} from './components/';

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Router>
          {/* <StickyNavbar /> */}
          <Navbar />
          <Header />
          <Games />
          <About />
          {/* <Platforms /> */}
          <Footer />
        </Router>
      </div>
    </div>
  );
}


/* -------------------------------- */
/* ----- BACKUP BACKUP BACKUP ----- */
/* -------------------------------- */

// const App = () => {
//   return (
//     <div className="app">
//       {/* <StickyNavbar /> */}
//       <Navbar />
//       <Header />
//       <Games />
//       <About />
//       <Platforms />
//       <Footer />
//     </div>
//   );
// }

export default App;