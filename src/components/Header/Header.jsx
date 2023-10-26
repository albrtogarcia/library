import Logo from '../../assets/logo.svg?react'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'
import { IconListVideo, IconFileQuestion, IconFileCheck, IconUser } from '../../assets/icon'

export const Header = () => (
  <header className="header">
    <Link to="/" className="header-brand">
      <Logo />
      <span className="header-tagline">Portal del Profesional</span>
    </Link>

    <div className="header-nav">
      <NavLink to="/adjudicaciones" className="nav-item">
        <IconListVideo />
        <span>Adjudicaciones</span>
      </NavLink>
      <NavLink to="/prefacturacion" className="nav-item">
        <IconFileQuestion />
        <span>Prefacturación</span>
      </NavLink>
      <NavLink to="/facturacion" className="nav-item">
        <IconFileCheck />
        <span>Facturación</span>
      </NavLink>
    </div>

    <button type="button" className="header-account">
      <div className="account-avatar">
        <IconUser />
      </div>
      <div className="account-content">
        <span className="account-name">Nombre Apellido</span>
        <span className="account-company">Agencia</span>
      </div>
    </button>
  </header>
)
