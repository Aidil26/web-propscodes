import React from "react"

import Layout from 'propscode/Layout/index.layout';
import SEO from 'propscode/Seo';

const NotFoundPage = () => (
  <Layout activeLayout="general">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
