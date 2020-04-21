import React from "react"
import { Link } from "gatsby"
import Layout from 'propscode/Layout/index.layout';
import SEO from 'propscode/Seo';

const Blog = () => (
  <Layout activeLayout='blog'>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog