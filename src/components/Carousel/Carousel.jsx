import React from 'react';
// import PropTypes from 'prop-types';
import Flickity from 'react-flickity-component';
import Fideuram from '../../assets/img/carousel-clients/Fideuram.png';
import MacBook from '../../assets/img/carousel-clients/MacBook.png';
import Wonders from '../../assets/img/carousel-clients/Wonders.png';
import './Carousel.scss';
import './flickity.scss';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <span className="carousel-title">
        My recent <span className="carousel-title-beauty">&nbsp;works</span>
      </span>
      <Flickity>
        <img className="carousel-img" src={Fideuram} />
        <img className="carousel-img" src={MacBook} />
        <img className="carousel-img" src={Wonders} />
      </Flickity>
    </div>
  );
};

Carousel.propTypes = {
  // Add here some propTypes
};

Carousel.defaultProps = {
  // Add here some default propTypes values
};

export default Carousel;
