import React from 'react';
import Carousel from 'propscode/Components/Project/carousel_item';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'gatsby';

const Bloglist = ({title, subtitle, image, url}) => {
  return (
    <div className="container bloglist">
      <div className="row">
        <div className="col-md-5">
          <img src={image} className="img-responsive img-thumnail img-blog" />
        </div>
        <div className="col-md-7 Content_item_blog">
          <h3 className="text-rubik font-18">{title}</h3> 
          <p className="subtitle text-Open_sarif">{subtitle}</p>
          <Link to={`/blog/${url}`}>Selengkapnya</Link>
        </div>
      </div>
      </div>
    )
  }
    
    
    export default Bloglist;