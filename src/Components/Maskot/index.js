import React from 'react';
import maskot from 'propscode/Assets/images/maskot.png';
import 'propscode/Components/Maskot/maskot.style.css';

export default () => {
  return (
    <div className="container" style={{ marginTop: '5px', height: '500px', position: 'relative' }}>
      <div className="row">
        <div className="col-md-12">
          <h3 style={{ textAlign: 'center', fontFamily: 'Open Sans', marginBottom: '20px', marginTop: 20 }}>MR Props Says</h3>
        </div>
        <div className="row">
          <div className="col-md-6 card-container image-maskot">
            <img src={maskot} width={'70%'} height={'400px'} />
          </div>
          <div className="col-md-6">
            <p style={{ textAlign: 'left', verticalAlign: 'center', fontFamily: 'Open Sans', marginBottom: '20px', marginTop: 20, lineHeight: 2 }} >
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like .
              kami menawarkan suatu layanan dimana client akan mendapatkan beberapa keuntugan diantaranya 
          </p>
            <ul>
              <li>Ke puasan client tujuan kami </li>
              <li>cepat dan dapat di percaya</li>
              <li>terjamin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}