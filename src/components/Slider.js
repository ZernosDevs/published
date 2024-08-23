import React from 'react';
import Slider from 'react-slick';
import './Slider.css';
import UnibuzzDesktops1 from '../resources/unibuzz/unibuzz-desktops1.png';
import UnibuzzDesktops2 from '../resources/unibuzz/unibuzz-desktops2.png';
import UnibuzzDesktops3 from '../resources/unibuzz/unibuzz-desktops3.png';
import UnibuzzDesktops4 from '../resources/unibuzz/unibuzz-desktops4.png';
import UnibuzzDesktops5 from '../resources/unibuzz/unibuzz-desktops5.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickSlider = () => {
  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    touchMove: false,
  };

  return (
    <div className="scroll-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={UnibuzzDesktops1} alt="Unibuzz Desktops 1" />
        </div>
        <div className="slide">
          <img src={UnibuzzDesktops2} alt="Unibuzz Desktops 2" />
        </div>
        <div className="slide">
          <img src={UnibuzzDesktops3} alt="Unibuzz Desktops 3" />
        </div>
        <div className="slide">
          <img src={UnibuzzDesktops4} alt="Unibuzz Desktops 4" />
        </div>
        <div className="slide">
          <img src={UnibuzzDesktops5} alt="Unibuzz Desktops 5" />
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
