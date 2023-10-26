import PropTypes from 'prop-types'
import './Badge.scss'

export const Badge = ({ type, text }) => <span className={`badge badge-${type}`}>{text}</span>

Badge.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'danger', 'info']),
  text: PropTypes.string.isRequired
}
