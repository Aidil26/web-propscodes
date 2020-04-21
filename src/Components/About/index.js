import React from 'react';
import PropTypes from 'prop-types';
import 'propscode/Components/About/about.style.css';

const About = ({ heihgt }) => {
  return (
    <div className="greycolor">
      <div className="container flex">
        <div className="row about-content" style={{ justifyContent: 'center', alignContent: 'center', height: heihgt }}>
          <div className="col-md-12">
            <h3 style={{ textAlign: 'center', fontFamily: 'Open Sans' }}>About Us</h3>
            <div className="col-md-10 offset-md-1">
              <p style={{ textAlign: 'center', fontSize: 16, lineHeight: 2, fontFamily: 'Open Sans' }}>
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like .
            </p>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg"  style={{zIndex:1,  minHeight:100, height:75, width:'100%' }} class="curve-container__curve curve-three" viewBox="0 0 1440 68" enable-background="new 0 0 1440 68"><path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" fill="#fff" transform="translate(0-1977)"></path></svg>
    </div>
  )
};

About.defaultProps = {
  heihgt: '200px'
}
export default About;
