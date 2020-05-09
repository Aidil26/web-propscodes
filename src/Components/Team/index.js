import React from 'react';
import Card from 'propscode/Components/Services/card';
import TeamLogo from 'propscode/Assets/images/about.jpg'

const Team = () => {
  return (
    <div style={{background:'#fff'}}>
      <div className="container-fluid" style={{height: '650px'}}>
        <div className="row">
          <div className="col-md-12">
            <h3 id="team" style={{ textAlign: 'center', fontFamily: 'Open Sans', marginBottom: '20px', marginTop:20 }}>Our Family Team</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-xs-4 service">
            <img src={TeamLogo} width={'100%'} height={'600px'} style={{resize:'cover'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Team;