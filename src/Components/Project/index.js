import React, {useEffect, useState} from 'react';
import OwlCarousel from 'react-owl-carousel';
import Carousel from 'propscode/Components/Project/carousel_item';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default () => {


  return (
    <div style={{ backgroundColor: '#FFF' }}>
      <div className="container" >
        <div className="row">
          <div className="col-md-12">
            <h3 id="program" className="align-center" style={{ fontFamily: 'Open Sans', textAlign: 'center' }}>Projects we have made</h3>
          </div>
          <div className="col-md-12">
            <OwlCarousel
              className="owl-theme"
              autoplay
              autoplayTimeout={3000}
              loop
              margin={10}
            >
              <div className="item">
                <Carousel text="hello" title="Design UI And UX" />
              </div>
              <div className="item">
                <Carousel text="hello" title="Design UI And UX" />
              </div>
              <div className="item">
                <Carousel text="hello" title="Design UI And UX" />
              </div>
              <div className="item">
                <Carousel text="hello" title="Design UI And UX" />
              </div>
              <div className="item">
                <Carousel text="hello" title="Design UI And UX" />
              </div>
              <div className="item">
                <Carousel text="hello" title="Design UI And UX" />
              </div>
              <div className="item">
                <Carousel text="hello" title="Design UI And UX" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

    </div>

  );
}