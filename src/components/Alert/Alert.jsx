import PropTypes from 'prop-types'
import { Icon } from '../Icon/Icon'
import './Alert.scss'

export const Alert = ({ type, title, text }) => {
  let header

  if (title) {
    header = (
      <h5 is className="alert-title">
        {title}
      </h5>
    )
  }
  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-icon">
        <Icon name={type} />
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
  text: PropTypes.string
}
