import React, { useRef, useEffect } from 'react';
import { images } from '../../constants';
//import { gsap } from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";

//gsap.registerPlugin(ScrollTrigger);

import './Gradient.scss';

function Gradient() {
  // const wrapper = useRef(null);

  // useEffect(() => {
  //   const [elements] = wrapper.current.children;

  //   const vector = elements.getElementsById('vector');

  //   gsap.set([vector], {})
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: ".image",
  //           start: "center center",
  //           end: "200%",
  //           scrub: true,
  //           markeres: true,
  //           pin: true
  //         }
  //       })
        
  //       .to(".image",  3,{ xPercent: 40, yPercent: 2 })
  //       .to(".image",  3, { xPercent: -40, yPercent: 30 })
  //       .to(".image",  3,{ xPercent: 40, yPercent: 50 });
  // });

  return (
    <>
      <div className="app__gradient position-1">
          <svg src={images.vector} alt='gradient vector'/>
      </div>
      <div className="app__gradient position-2">
          <svg src={images.vector} alt='gradient vector'/>
      </div>
      <div className="app__gradient position-3">
          <svg src={images.vector} alt='gradient vector'/>
      </div>
      <div className="app__gradient position-4">
          <svg src={images.vector} alt='gradient vector'/>
      </div>
      <div className="app__gradient-full">
          <svg src={images.vector} alt='gradient vector'/>
      </div>
    </>
  );
}

export default Gradient;