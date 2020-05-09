import React from 'react';
import Card from 'propscode/Components/Services/card';


const Services = () => {
  return (
    <div style={{marginTop:40}}>
    <div className="background_fill"></div>
      <div className="container" style={{ marginTop: '20px',  position: 'relative' }}>
        <div className="row">
          <div className="col-md-12">
            <h3 id="services" style={{ textAlign: 'center', fontFamily: 'Open Sans', marginBottom: '20px', marginTop:20 }}>Kind of project we cover</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-xs-12 service" >
            <Card text="hello" title="Design UI And UX" img="https://img.icons8.com/cute-clipart/64/000000/android.png"/>
          </div>
          <div className="col-md-4 col-xs-12 service">
          <Card text="hello" title="Design UI And UX" img="https://img.icons8.com/clouds/100/000000/web.png"/>
          </div>
          <div className="col-md-4 col-xs-12 service">
          <Card text="hello" title="Design UI And UX" img="https://img.icons8.com/cotton/64/000000/computer.png"/>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg"  style={{zIndex:1,  minHeight:100, height:75, width:'100%' }} class="curve-container__curve curve-three" viewBox="0 0 1440 68" enable-background="new 0 0 1440 68"><path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" fill="#Fff" transform="translate(1-1977)"></path></svg>
    </div>
  )
}


export default Services;