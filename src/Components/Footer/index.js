import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <footer className="footer" style={{ backgroundColor: '#171D28' }}>
      <div style={{ width: '100%', height: 70, background: '#3FACC1' }}>
        <div className="container">
          <div className="row p-2">
            <div className="col-md-8">
              <h4 className="text-white pt-2" >Subcribe to get last update about our blogs or articles</h4>
            </div>
            <div className="col-md-4 p-2">
              <input type="email" name="email" autoFocus placeholder="input your email here" className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ flex: 1, justifyContent: 'center' }}>
        <div className="row flex">
          <div className="col-sm-4">
            <a href="/contact" className="text-white"><b style={{ fontSize: '6em', fontWeight: 500, color: '#FD9B01' }}>P</b>ropscode</a>
          </div>
          <div className="col-sm-4">
            <div className="footer-widget textwidget">
              <h5 className="title text-white">Author</h5>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="https://www.wowthemes.net/premium-themes-templates/">About Us</a></li>
                <li><a target="_blank" href="https://stackoverflow.com/users/7760915/mahmud-she-putra-pandawa">Blogs</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="footer-widget textwidget">
              <h5 className="title text-white">Our Quotes</h5>
              <p className="text-white text-rubik">Teruslah menulis untuk berbagi karena Ilmu yang bermanfaat ialah ilmu yang berguna untuk banyak orang.</p>
            </div>
          </div>

        </div>
        <div className="container">
          <div className="row flex-copyright" >
            <div>
              <p className="pull-left text-white">Copyright © 2020 PropsCode.com</p>
            </div>
            <div>
              <p className="pull-left text-white">PropsCode Teams</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;