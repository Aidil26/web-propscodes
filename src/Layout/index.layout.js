import React, { Component, useContext, useEffect } from 'react';
import PropsTypes from 'prop-types';
import GeneralLayout from 'propscode/Layout/general.layout';
import BlogLayout from 'propscode/Layout/blog.layout';
import { LayoutProvider } from 'propscode/contex/context.layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'propscode/Assets/css/layout.css';
import ScrollAnimation from 'propscode/helper/index';

const Layout = ({ activeLayout, children,...props }) => {
  let [activeKey, setActiveKey] = React.useState()
  const  handleSelect = (eventKey) => setActiveKey(eventKey)
  let data = {
    msg: null,
    msgComponent: null,
  }

  useEffect(() => {
    ScrollAnimation('navbar');
  })


  if(activeLayout == 'general') {
    return (
      <LayoutProvider.Provider value={data}>
        <GeneralLayout activeKey={activeKey} onSelect={handleSelect}>{children}</GeneralLayout>
      </LayoutProvider.Provider>
    );
  } else {
    return (
      
      <LayoutProvider.Provider value={data}>
        <BlogLayout activeKey={activeKey} onSelect={handleSelect}>{children}</BlogLayout>
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