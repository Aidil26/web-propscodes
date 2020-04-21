import React from 'react';
import PropTypes from 'prop-types';
import 'propscode/Components/Services/services.style.css';

const Card = ({ title, text }) => {
  return (
    <div className="card " style={{ marginBottom: 20, flex:1,justifyContent:'center', width: "94%", height: '300px', borderWidth:0, boxShadow:'10px 10px rgba(170, 170, 170, 0.3)', cursor:'pointer'}}>
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-justify" style={{fontFamily: 'Open Sans'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}


Card.PropsTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Card;