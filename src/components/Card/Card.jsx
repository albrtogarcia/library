import PropTipes from 'prop-types'
import { Icon } from '../Icon/Icon.jsx'
import './Card.scss'

export const Card = ({ title, icon, children }) => (
  <div className="card">
    <div className="card-header">
      <Icon name={icon} />
      <h3 className="card-title">{title}</h3>
    </div>
    <div className="card-body">{children}</div>
  </div>
)

Card.propTypes = {
  title: PropTipes.string.isRequired,
  icon: PropTipes.string.isRequired,
  children: PropTipes.node.isRequired
}
