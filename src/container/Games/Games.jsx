import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './Games.scss';

/*  Backend import  */
//
//import { urlFor, client } from '../../client';

const gameTiles = [
  { title: 'Space Lines', imgUrl: images.about01 },
  { title: 'Fashion Friends', imgUrl: images.about02 },
  { title: 'Fashion Girls', imgUrl: images.about03 },
];

const Games = () => {
  
  /*  Backend const  */
  //
  // const [gameTiles, setgameTiles] = useState([]);
  //
  // useEffect(() => {
  //   const query = '*[_type == "gameTiles"]';
  //
  //   client.fetch(query)
  //     .then((data) => setgameTiles(data))
  // }, []);

  return (
    <>
      <p className="p-gradient-text">Lose yourself in new magical worlds</p>
      <h2 className="h2-text">Explore Games</h2>

      <div className="app__tiles">
        {gameTiles.map((gameTiles, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__tile-item"
            key={gameTiles.title + index}
          >
            <img src={gameTiles.imgUrl} alt={gameTiles.title} />
            {/* Backend */}
            {/* <img src={urlFor(gameTiles.imgUrl)} alt={gameTiles.title} /> */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{gameTiles.title}</h2>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default Games;
//export default AppWrap(Games, 'games');