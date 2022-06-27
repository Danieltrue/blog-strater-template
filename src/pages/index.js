import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from '../components/nav/nav.com'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Global from './global'

const IndexPage = ({ data }) => {
  return (
    <>
    <Global/>
      <Seo title="Home" />
      <Layout>
        <Nav/>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div key={node.id}>
                <h4>{node.frontmatter.title}</h4>
              </div>
            )
          })}
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            title
            description
          }
          html
        }
      }
    }
  }
`
