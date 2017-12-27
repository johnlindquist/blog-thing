import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Bio from '~/components/Bio'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1 className={`pb-3`}>{post.frontmatter.title}</h1>
        <p className={`italic`}>{post.frontmatter.date}</p>
        <div
          className={`post`}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <Bio />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
