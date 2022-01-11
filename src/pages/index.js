import * as React from "react"
import Body from "../components/Body"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"
import Stats from "../components/Stats"
import { Contact } from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Body />
    <Gallery heading="Our Work at Company"/>
    <Testimonials />
    <Stats />
    <Contact />
  </Layout>
)

export default IndexPage
