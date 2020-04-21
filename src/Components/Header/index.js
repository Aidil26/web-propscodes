import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from 'propscode/Assets/images/icon.png';


const Header = ({ onSelect, activeKey, ...props }) => (
  <nav className="navbar navbar-expand-md bg-white navbar-dark" id="navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={Logo} alt="Logo" style={{ width: '170px', height: '55px' }} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span><i className="fa fa-bars" style={{color:'black'}}></i></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item px-2">
            <a className="nav-link active" href="#">Home</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="#">Teams</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="#">Programs</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="#">Blogs</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item px-2">
            <a className="btn btn-info btn-xs" href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
Header.prototype = {
  onSelect: PropTypes.func.isRequired,
  activeKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}


export default Header
