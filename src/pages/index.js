// src/pages/index.js
import * as React from "react"
import Layout from "../components/layout.js"
import PortfolioGrid from "../components/portfolio-grid.js"

const IndexPage = () => {
  return (
    <Layout>
      <PortfolioGrid />
    </Layout>
  )
}

export default IndexPage
export const Head = () => <title>Portfolio | Elena Vance Photography</title>