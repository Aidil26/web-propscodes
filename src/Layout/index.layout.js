import React, { Component, useContext, useEffect } from 'react';
import PropsTypes from 'prop-types';
import GeneralLayout from 'propscode/Layout/general.layout';
import BlogLayout from 'propscode/Layout/blog.layout';
import { LayoutProvider } from 'propscode/contex/context.layout';
import { scrollAnimation, showToggle } from 'propscode/helper/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngellist } from "@fortawesome/free-brands-svg-icons";
import { Link, animateScroll as scroll } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'propscode/Assets/css/layout.css';


const Layout = ({ activeLayout, children, ...props }) => {
  let [activeKey, setActiveKey] = React.useState()
  const handleSelect = (eventKey) => setActiveKey(eventKey)
  let data = {
    msg: null,
    msgComponent: null,
  }

  useEffect(() => {
    scrollAnimation('navbar', activeLayout);
    showToggle('toggleshow');
  });
  if (activeLayout == 'general') {
    return (
      <LayoutProvider.Provider value={data}>
        <GeneralLayout activeKey={activeKey} onSelect={handleSelect}>{children}</GeneralLayout>
        <a href="" id="toggleshow" > 
          <Link
            to="header_top" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <span className="scroll_window" id="togleScroll" >
              <FontAwesomeIcon icon={faAngellist} />
            </span>
          </Link>

        </a>
      </LayoutProvider.Provider>
    );
  } else {
    return (
      <LayoutProvider.Provider value={data}>
        <BlogLayout activeKey={activeKey} onSelect={handleSelect}>{children}</BlogLayout>
        <a href="" id="toggleshow"> 
          <Link
            to="blogs_list"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <span className="scroll_window" id="togleScroll" >
              <FontAwesomeIcon icon={faAngellist} />
            </span>
          </Link></a>
      </LayoutProvider.Provider>
    )
  }
}


Layout.PropTypes = {
  activeLayout: PropsTypes.oneOf(['general', 'blogs']).isRequired,
}

Layout.defaultProps = {
  activeLayout: 'general'
}

export default Layout;