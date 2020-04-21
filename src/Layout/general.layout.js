/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useContext} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// @ts-ignore
import Background from 'propscode/Assets/images/background.png';
import { Header, Footer } from 'propscode/Components';
import { LayoutProvider } from 'propscode/contex/context.layout';


const Layout = ({onSelect,children, ...props}) => {
  const context = useContext(LayoutProvider);
  return (
    <>
      <header>
        <section style={{ backgroundImage: `url(${Background})`, width: '100%', height: '800px', backgroundSize:'center', backgroundRepeat:'no-repeat' }}>
            <Header activeKey={context.activeKey} onSelect={onSelect}/>
        </section>
        
      </header>
        <main >{children}</main>
      <footer>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  msg: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
}

Layout.defaultProps = {
  bgImage: "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg"
}
export default Layout
