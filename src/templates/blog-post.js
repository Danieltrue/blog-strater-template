import React from "react"
import { gatsby, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <main>
        <div>{post.frontmatter.title}</div>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
