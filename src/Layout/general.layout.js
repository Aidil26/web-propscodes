// @ts-nocheck
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, useEffect, useState, createRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import LoadingBar from 'react-top-loading-bar';
import Background from 'propscode/Assets/images/background.png';
import { GeneralNav as Header, Footer } from 'propscode/Components';
import { LayoutProvider } from 'propscode/contex/context.layout';
import { LoadingComponent, } from 'propscode/Components';
import OwlCarousel from 'react-owl-carousel';
import Assets from 'propscode/Assets';



const Layout = ({ onSelect, children, ...props }) => {
  let [loading, SetLoading] = useState(true);
  let [progress, setProgress] = useState(0);
  let refScroll = createRef();

  let LoadingBAr;
  useEffect(() => {
    setProgress(20);
    /* scroll on the top */
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
    
    setTimeout(() => {
      for (let i in Array.from([20,100])) {
        setProgress(prevstate=> prevstate + i);
      }
    }, 2000);
  }, []);
  const context = useContext(LayoutProvider);
  return (
    <>
      <header ref={refScroll}>
        <LoadingBar
          height={3}
          color='blue'
          progress={progress}
          onLoaderFinished={()=> SetLoading(false)}
          onRef={ref => (LoadingBAr = ref)}
        />
        {/* {loading ? <LoadingComponent /> : null} */}
        <section id="header_top" style={{ backgroundImage: `url(${Background})`, width: '100%', height: '800px', backgroundSize: 'center', backgroundRepeat: 'no-repeat', backgroundPositionX: 'center', WebkitBackgroundSize:'contain' }}>
          <div className="slideshow_header" style={{position:'absolute', display:'flex', justifyContent:'center', alignItems:'flex-end', height:'770px', width:'100%'}}>
          <OwlCarousel
              className="owl-theme"
              autoplay={true}
              loop={true}
              dots={true}
              items={1}
              margin={10}
              autoplayTimeout={3000}
              autoplayHoverPause
              style={{
                width: '53%', height: '480px',
                position: 'relative',
                top:-55
                
              }}
            >
              <div className="item">
                <img src={Assets.slider.satu} width='400%' height='480px'/>
              </div>
              <div className="item">
                <img src={Assets.slider.dua} width='400%' height='480px'/>
              </div>
              <div className="item">
                <img src={Assets.slider.tiga} width='400%' height='480px'/>
              </div>
            </OwlCarousel>
          </div>
          <Header activeKey={context.activeKey} onSelect={onSelect} />
        </section>
      </header>
      <main style={{ backgroundColor: '#F8F8F8' }}>{children}</main>
    
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
