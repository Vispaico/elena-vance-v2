// The NEW, FIXED version of src/templates/using-dsg.js
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout.js" // Also good practice to add the .js here

const UsingDSG = () => (
  <Layout>
    {/* <Seo title="Using DSG" /> <-- The problematic component is now gone */}
    <h1>Hello from a DSG Page</h1>
    <p>This page is not built until requested by a user.</p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/dsg/">documentation about DSG</a>.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingDSG