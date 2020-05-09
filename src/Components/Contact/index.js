import React from 'react';
import Card from 'propscode/Components/Services/card';


const Contact = () => {
  return (
    <div>
      <div style={{
        width: 100,
        height: 100,
        borderRadius: 20,
        display:'flex',
        justifyContent:'flex-end',
        background: 'rgba(57, 167, 189, 0.5)',
        position: 'relative',
        right: '-20px',
        zIndex: -10,
        transform: 'rotate(-135deg)',
        boxShadow: '10px 10px 10px 3px rgba(165, 228, 233, 0.4)',
      }} />
      <div className="container" style={{ marginTop: '20px', height: '400px', position: 'relative', background:'#eee' }}>
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: 'center', fontFamily: 'Open Sans', marginBottom: '20px', marginTop:20 }}>Contact Us</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
              {/* <img src={} /> */}
          </div>
          <div className="col-md-6">
            
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contact;