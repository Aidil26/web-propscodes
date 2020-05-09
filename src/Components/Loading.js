import React, {useEffect, useState} from 'react';
import OwlCarousel from 'react-owl-carousel';
import Carousel from 'propscode/Components/Project/carousel_item';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Maskot from 'propscode/Assets/images/maskot.png'

export default () => {


  return (
    <div className="loading_container">
      <div className="container container_loading_item">
        <div className="row">
          <div className="col-md-6">
            <img src={Maskot} width={300}/>
          </div>
          <div className="col-md-6 flex-content-loading">
            <h2>Loading...</h2>
            <p>Selamat datang di website kami.</p>
          </div>
        </div>
      </div>
    </div>
  );
}