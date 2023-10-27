import React from 'react'
import PropTypes from 'prop-types'
import IconInfo from '../../assets/icon/info.svg'
import './Alert.scss'

const Alert = ({ type, title, text }) => {
  let header

  if (title) {
    header = <h5 className="alert-title">{title}</h5>
  }
  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-icon">
        <IconInfo />
      </div>
      <div className="alert-content">
        {header}
        <p className="alert-message">{text}</p>
      </div>
    </div>
  )
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'danger', 'info']),
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Alert
