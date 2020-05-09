import React from 'react';
import maskot from 'propscode/Assets/images/maskot.png';
import 'propscode/Components/Maskot/maskot.style.css';

export default () => {
  return (
    <div className="container" style={{ marginTop: '5px', position: 'relative', background: '#F8F8F8' }}>
      <div className="row">
        <div className="col-md-12">
          {/* <h3 style={{ textAlign: 'center', fontFamily: 'Open Sans', marginBottom: '20px', marginTop: 20 }}>MR Props Says</h3> */}
        </div>
        <div className="row">
          <div className="col-md-6 card-container image-maskot">
            <img src={maskot} width={'70%'} height={'400px'} />
          </div>
          <div className="col-md-6">
            <p style={{ textAlign: 'left', verticalAlign: 'center', fontFamily: 'Open Sans', marginBottom: '20px', marginTop: 20, lineHeight: 2 }} >
              What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
            <div className="form-check">
              <input className="form-check-input" disabled checked type="checkbox" value="" id="defaultCheck1"/>
              <label className="form-check-label">Fast Process
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" disabled checked type="checkbox" value="" id="defaultCheck1"/>
              <label className="form-check-label">Reliable  
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" disabled checked type="checkbox" value="" id="defaultCheck1"/>
              <label className="form-check-label">efiesient
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}