import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Team from "../components/team"
import Future from "../components/future"
import * as styles from "../components/index.module.css"
import "../components/index.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Team />
    <Future />
  </Layout>
)

export default IndexPage
