import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ tag, children, className, ...rest }) => {
  const Tag = tag || 'p'
  return (
    <Tag className={`text ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

Text.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Text.defaultProps = {
  tag: 'p',
  className: '',
}

export default Text
