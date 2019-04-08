import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features2 from '../components/Features2'
import Content, { HTMLContent } from '../components/Content'

export const FaqPageTemplate = ({
  title,
  content,
  contentComponent,
  qaContainer,
}) => (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <Features2 gridItems={qaContainer.qa} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )

FaqPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  qaContainer: PropTypes.shape({
    qa: PropTypes.array,
  }),
}

const FaqPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <FaqPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        content={frontmatter.html}
        qaContainer={frontmatter.qaContainer}
      />
    </Layout>
  )
}

FaqPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FaqPage

export const FaqPageQuery = graphql`
  query FaqPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "faq-page" } }) {
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
