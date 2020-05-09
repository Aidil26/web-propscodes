// @ts-nocheck
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { BlogNav as Header, Footer } from 'propscode/Components';
import { LayoutProvider } from 'propscode/contex/context.layout';
import LoadingBar from 'react-top-loading-bar';

const Layout = ({ activeKey, children, onSelect, ...props }) => {
  let [loading, SetLoading] = useState(true);
  let [progress, setProgress] = useState(0);
  let LoadingBAr = React.createRef();

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      for (let i in Array.from([20,100])) {
        setProgress(prevstate=> prevstate + i);
      }
    }, 2000);
  }, []);

  const context = React.useContext(LayoutProvider);
  return (
    <>
      <header>
      <LoadingBar
          height={3}
          color='blue'
          progress={progress}
          onLoaderFinished={()=> SetLoading(false)}
          onRef={ref => (LoadingBAr = ref)}
        />
        <Header  activeKey={activeKey} onSelect={onSelect}/>
      </header>
      <main>{children}</main>
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
