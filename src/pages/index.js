
import React from "react"
import { Link } from "gatsby"
import Layout from 'propscode/Layout/index.layout';
import SEO from 'propscode/Seo';
import {
  About,
  Maskot,
  Services,
  Team,Project,
  Contact
} from 'propscode/Components';

const Home = () => (
  <Layout activeLayout='general'>
    <About />
    <Maskot/>
    <Services />
    <Team />
    <Project/>
    <Contact/>
  </Layout>
)

export default Home;
