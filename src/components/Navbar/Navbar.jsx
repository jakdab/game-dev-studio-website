import React from 'react';
import { useState } from 'react';

import { 
  Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
  NavBtn, 
  NavBtnLink, 
} from './NavbarElements';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [ fix, setFix ] = useState(false)

  function setFixed() {
    if (window.scrollY >= 1) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scorll", setFixed)

  return (
    <>
      <nav className="app__navbar">
      {/* <Nav className={fix ? 'navbar fixed' : 'navbar'}> */}
        <div className="app__navbar-logo">
          <img src={images.logo} alt='logo' />
        </div>
        <Bars />
        <li className="app__navbar-menu">
          <a className="app__navbar-links" href="#games" activeStyle>Games</a>
          <a className="app__navbar-links" href="#about" activeStyle>About</a>
          <a className="app__navbar-links" href="#platforms" activeStyle>Platforms</a>
        </li>
        <div className="app__navbar-btn">
          <a className="app__navbar-btn-link" href="#about">Contact</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar;




/* -------------------------------- */
/* ----- BACKUP BACKUP BACKUP ----- */
/* -------------------------------- */


// import React, { useState } from 'react';

// //import Buttons from './components/';
// import { images } from '../../constants/';
// import './Navbar.scss';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { motion } from 'framer-motion';
// //import { About } from '../../container';

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={images.logo} alt='logo' />
//       </div>

//       <ul className="app__navbar-links">
//         {[ 'games', 'about', 'platforms'].map((item) => (
//           <li className="app__flex p-text" key={'link-${item}'}>
//             <a href={`#${item}`} /* onClick={() => setToggle(false)} */ >{item}</a>
//           </li>
//         ))}
//       </ul>

//       <div className="app__navbar-menu">
//           <HiMenuAlt4 onClick={() => setToggle(true)}/>

//           {toggle && (
//             <div
//               whileInView={{ x: [300, 0], once: true }}
//               transition={{ duration: 0.85, ease: 'easeOut'}}
//             >
//               <HiX onClick={() => setToggle(false)} />
//               <ul>
//                 {['About', 'Games', 'Platforms'].map((item) => (
//                 <li key={{item}}>
//                   <div />
//                   <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
//                 </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//       </div> 
//     </nav>
//   )
// }

// export default Navbar;