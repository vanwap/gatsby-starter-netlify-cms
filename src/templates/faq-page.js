import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const FaqPageTemplate = ({ title, content, contentComponent, qaContainer }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <Features gridItems={qaContainer.qa} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FaqPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  qaContainer: PropTypes.shape({
    qa: PropTypes.array,
  }),
}

const FaqPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FaqPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        qaContainer={post.frontmatter.qaContainer}
      />
    </Layout>
  )
}

FaqPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FaqPage

export const FaqPageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        qaContainer {
          qa {
            question
            answer 
          }
        }
      }
    }
  }
`
