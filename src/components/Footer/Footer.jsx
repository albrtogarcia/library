import { Link } from 'react-router-dom'
import './Footer.scss'

export const Footer = () => {
  const current = new Date()
  const year = current.getFullYear()
  const syncDate = current.toLocaleString('es-ES', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })

  return (
    <footer className="footer">
      <div className="copy">
        <small>&copy;{year} Movistar Plus+</small>
      </div>

      <div className="footer-nav">
        <a href="#" className="nav-item">
          <span>Aviso legal</span>
        </a>
        <a href="#" className="nav-item">
          <span>Condiciones generales</span>
        </a>
        <a href="#" className="nav-item">
          <span>Privacidad</span>
        </a>
        <a href="#" className="nav-item">
          <span>Cookies</span>
        </a>
        <Link to="/documentacion" className="nav-item">
          <span>Documentación</span>
        </Link>
      </div>

      <div className="info-sync">
        <small>
          Última actualización: <time dateTime="2023-08-30T12:45">{syncDate}</time>
        </small>
      </div>
    </footer>
  )
}
