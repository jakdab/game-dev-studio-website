import React from 'react';
import { images } from '../../constants';

import './Gradient.scss';

const Gradient = () => {
  return (
    <div className="app__gradient">
        <svg src={images.vector} alt='gradient vector'/>
    </div>
  )
}

export default Gradient;