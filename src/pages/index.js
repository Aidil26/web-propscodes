
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from 'propscode/Layout/index.layout';
import SEO from 'propscode/Seo';
import {
  About,
  Maskot,
  Services,
  Team, Project,
  Blogs,
  Footer
} from 'propscode/Components';

const Home = () => {
 

  return (
    <Layout activeLayout='general'>
      <SEO title="Home" />
      <About />
      <Maskot />
      <Services />
      <Project />
      <Team />
      <Blogs/>
      <Footer />
    </Layout>
  );
}

export default Home;
