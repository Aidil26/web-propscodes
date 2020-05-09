import React from 'react';
import Carousel from 'propscode/Components/Project/carousel_item';
import OwlCarousel from 'react-owl-carousel';


const Blogs = () => {
  return (
    <div style={{ background: '#fff', display: 'flex',flexDirection:'column', marginTop:-120}}>
      <div className="container" style={{position:'relative', bottom:-160}}>
        <h3 style={{ textAlign: 'center', fontFamily: 'Open Sans' }}>What People Says to us</h3>
        <OwlCarousel className="owl-theme" autoplay autoplayTimeout={3000} dots={false} loop margin={10}>
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
      <div>
        <svg xmlns="http://www.w3.org/2000/svg"  style={{minHeight:100, height:75, width:'100%' }} className="curve-container__curve curve-three" viewBox="0 0 1440 68" enable-background="new 0 0 1440 68"><path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" fill="#F8F8F8" transform="translate(0-1977)"></path></svg>
        <div style={{ backgroundColor: '#F8F8F8', height: 100, display:'flex'}}/>
      </div>
      </div>
    )
  }
    
    
    export default Blogs;