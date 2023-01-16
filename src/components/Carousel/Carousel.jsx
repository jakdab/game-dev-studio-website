import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './Carousel.css';

jQuery(document).ready(function($){
    let slider = $('.owl-carousel');
    slider.each(function () {
      $(this).owlCarousel({
        nav: true,
        loop: true,
        dots: false,
        pagination: false,
        margin: 25,
        autoHeight: false,
        stagePadding: 0,
        responsive:{
          0:{
            items: 1,
            stagePadding: 0,
            margin: 30,
          },
          767:{
            items: 1,
            stagePadding: 0,
          },
          1000:{
            items: 1,
          }
        }
      });
    });
});

const Carousel = () => {
  return (
    <div>Carousel</div>
  )
}

export default Carousel;