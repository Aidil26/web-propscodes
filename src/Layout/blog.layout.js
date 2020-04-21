/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Footer } from 'propscode/Components';
import { LayoutProvider } from 'propscode/contex/context.layout';

const Layout = ({activeKey, children, onSelect,...props}) => {
  const context = React.useContext(LayoutProvider);
  return (
    <>
      <header>
        <Header  activeKey={activeKey} onSelect={onSelect}/>
      </header>
      <footer>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  onSelect: PropTypes.func.isRequired,
}

Layout.defaultProps = {
  bgImage: "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg"
}
export default Layout
