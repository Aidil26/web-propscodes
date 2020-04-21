import React from 'react';
import Card from 'propscode/Components/Services/card';


const Services = () => {
  return (
    <div>
      <div style={{
        width: 400,
        height: 400,
        background: 'rgba(57, 167, 189, 0.7)',
        position: 'absolute',
        visibility: 'unset',
        left: '-250px',
        zIndex: -10,
        transform: 'rotate(135deg)',
        boxShadow: '40px 40px 40px 40px rgba(165, 228, 233, 0.8)',
      }} />
      <div className="container" style={{ marginTop: '20px', height: '400px', position: 'relative' }}>
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: 'center', fontFamily: 'Open Sans', marginBottom: '20px', marginTop:20 }}>Our Services</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-xs-4 service" >
            <Card text="hello" title="Design UI And UX" />
          </div>
          <div className="col-md-4 col-xs-12 service">
            <Card text="hello" title="Website Development" />
          </div>
          <div className="col-md-4 col-xs-12 service">
            <Card text="hello" title="Mobile Development" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Services;