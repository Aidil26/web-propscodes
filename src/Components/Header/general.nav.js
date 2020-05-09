import PropTypes from "prop-types"
import React from "react"
import Logo from 'propscode/Assets/images/icon.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import {Link as Linktos} from 'gatsby'

const LinkTo = ({children,to}) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>
   {children}
  </Link>
)



const Header = ({ onSelect, activeKey, ...props }) => (
  <nav className="navbar navbar-expand-md bg-white navbar-dark" id="navbar">
    <div className="container-fluid">
        <Linktos className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" style={{ width: '170px', height: '55px' }} />
        </Linktos>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span><i className="fa fa-bars" style={{color:'black'}}></i></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item px-2">
            <LinkTo to="header_top" className="link-item-nav">
              <a className="nav-link" href="/">Home</a>
            </LinkTo>
          </li>
          <li className="nav-item px-2">
            <LinkTo to="about">
              <a className="nav-link" href="#">About</a>
            </LinkTo>
          </li>
          <li className="nav-item px-2">
          <LinkTo to="services">
              <a className="nav-link" href="#">Service</a>
            </LinkTo>
          </li>
          
          <li className="nav-item px-2">
           <LinkTo to="program">
              <a className="nav-link" href="#">Program</a>
            </LinkTo>
          </li>
          <li className="nav-item px-2">
            <LinkTo to="team">
              <a className="nav-link" href="#">Team</a>
            </LinkTo>
          </li>
          <li className="nav-item px-2">
            <Linktos className="nav-link" to='/blog/'>Blogs</Linktos>
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


export default Header;
