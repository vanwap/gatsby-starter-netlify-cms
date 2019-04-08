import React from 'react'
import PropTypes from 'prop-types'
import { FaqPageTemplate } from '../../templates/faq-page'

const FaqPagePreview = ({ entry, widgetFor }) => (
  <FaqPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    qa={entry.getIn(['data', 'qa'])}
  />
)

const FaqPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
      <FaqPageTemplate
        title={data.title}
        content={data.body}
        qaContainer={data.qaContainer || { qa: [] }}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

FaqPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FaqPagePreview
