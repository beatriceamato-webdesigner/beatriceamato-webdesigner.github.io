import React from 'react';
// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router';
import Flickity from 'react-flickity-component';
import Fideuram from '../../assets/img/carousel-clients/Fideuram.png';
import Edenred from '../../assets/img/carousel-clients/Edenred.png';
import Wonders from '../../assets/img/carousel-clients/Wonders.png';
import './Carousel.scss';
import './flickity.scss';

const Carousel = () => {
  // const history = useNavigate();

  return (
    <div className="carousel-container">
      <span className="carousel-title">
        My recent <span className="carousel-title-beauty">&nbsp;works</span>
      </span>
      <Flickity>
        {/* <img className="carousel-img" src={Fideuram} onClick={() => history('/')} /> */}
        <div className="carousel-wrap-img">
          <img className="carousel-img" src={Fideuram} />
          <p className="carousel-img__description">Fideuram</p>
        </div>
        <div className="carousel-wrap-img">
          <img className="carousel-img" src={Wonders} />
          <p className="carousel-img__description">ASPI x Wonders</p>
        </div>
        <div className="carousel-wrap-img">
          <img className="carousel-img" src={Edenred} />
          <p className="carousel-img__description">Edenred</p>
        </div>
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
