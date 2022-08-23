// Standard components.
import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Landing from "./Landing"

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Landing />
    </Layout>
  )
}
