import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { images } from '../../constants';
import './Games.scss';
//import { AppWrap } from '../../wrapper';
// import $ from 'jquery';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.min.css';


/*  Backend import  */
//
//import { urlFor, client } from '../../client';

// const gameTiles = [
//   { title: 'Space Lines', imgUrl: images.about01 },
//   { title: 'Fashion Friends', imgUrl: images.about02 },
//   { title: 'Fashion Girls', imgUrl: images.about03 },
// ];

const videoTiles = [
  { title: 'Trailer Space Lines (Nintendo Switch)', videoUrl: "https://www.youtube.com/embed/7VZlkmOfkck?controls=0" },
  { title: 'Trailer Fashion Girls (Nintendo Switch)', videoUrl: "https://www.youtube.com/embed/i1byLzQhJy4?controls=0" },
  { title: 'Trailer Fashion Princess (Nintendo Switch)', videoUrl: "https://www.youtube.com/embed/P-VjyjmLjZQ?controls=0" },
  { title: 'Trailer Fashion Friends (Nintendo Switch)', videoUrl: "https://www.youtube.com/embed/x1-5g80yw5k?controls=0" },
  { title: 'Trailer Animal Puzzle Cats', videoUrl: "https://www.youtube.com/embed/AVGJrlbQTrU?controls=0" },
];

// jQuery(document).ready(function($){
//   let slider = $('.owl-carousel');
//   slider.each(function () {
//     $(this).owlCarousel({
//       nav: true,
//       loop: true,
//       dots: false,
//       pagination: false,
//       margin: 25,
//       autoHeight: false,
//       stagePadding: 0,
//       responsive:{
//         0:{
//           items: 1,
//           stagePadding: 0,
//           margin: 30,
//         },
//         767:{
//           items: 1,
//           stagePadding: 0,
//         },
//         1000:{
//           items: 1,
//         }
//       }
//     });
//   });
// });

const Games = () => {
  return (
    <div id="games" className="app__games app__container">
      <div className="app__games-info">
        <div>
          <p className="p-gradient-text">Lose yourself in new magical worlds</p>
          <h2 className="h2-text margin-16">Explore Games</h2>
        </div>

        {/* <OwlCarousel
          nav="true"
          loop="true"
          dots="false"
          pagination="false"
          margin="1"
          autoHeight="false"
          stagePadding="0"
          >
            {videoTiles.map((videoTiles) => (
              <div className="div-round">
                <iframe className="iframe-round"
                  src={videoTiles.videoUrl} 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="
                    accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                  allowfullscreen 
                />
              </div>
            ))}
        </OwlCarousel> */}

        <motion.div className="app__carousel">
          <motion.div 
            className="app__inner-carousel"
            drag="x" 
            dragConstraints={{
              left: -2290,
              right: 2290,
            }}
          >
            {videoTiles.map((videoTiles) => (
              <div className="div-round">
                <iframe className="iframe-round"
                  src={videoTiles.videoUrl} 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="
                    accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                  allowfullscreen 
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Games;
//export default AppWrap(Games, 'games');






/* -------------------------------- */
/* ----- BACKUP BACKUP BACKUP ----- */
/* -------------------------------- */

// return (
//   <>
//     <div>
//       <p className="p-gradient-text">Lose yourself in new magical worlds</p>
//       <h2 className="h2-text">Explore Games</h2>
//     </div>

//     <div className="app__tiles">
//       {gameTiles.map((gameTiles, index) => (
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.5, type: 'tween' }}
//           className="app__tile-item"
//           key={gameTiles.title + index}
//         >
//           <img src={gameTiles.imgUrl} alt={gameTiles.title} />
//           {/* Backend */}
//           {/* <img src={urlFor(gameTiles.imgUrl)} alt={gameTiles.title} /> */}
//           {/* <h2 className="bold-text" style={{ marginTop: 20 }}>{gameTiles.title}</h2> */}
//         </motion.div>
//       ))}
//     </div>
//   </>




        // <div className="">
        //   <div className="div-round">
        //     <iframe className="iframe-round"
        //       src="https://www.youtube.com/embed/x1-5g80yw5k?controls=0" 
        //       title="YouTube video player" 
        //       frameborder="0" 
        //       allow="
        //         accelerometer; 
        //         autoplay; 
        //         clipboard-write; 
        //         encrypted-media; 
        //         gyroscope; 
        //         picture-in-picture" 
        //       allowfullscreen
        //     >
        //     </iframe>
        //   </div>
        // </div>