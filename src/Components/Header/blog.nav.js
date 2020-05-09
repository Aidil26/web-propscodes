import PropTypes from "prop-types"
import React from "react"
import Logo from 'propscode/Assets/images/icon.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import {Link as Linktos} from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <span>
        <FontAwesomeIcon icon="check-square" color="#000"/>

        </span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item px-2">
            <Linktos to="/">
              <a className="nav-link" href="/">Home</a>
            </Linktos>
          </li>
          <li className="nav-item px-2">
            <Linktos to="/blog/">
              <a className="nav-link" href="/blog">Propscode  |  Blogs</a>
            </Linktos>
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
