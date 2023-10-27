import PropTypes from 'prop-types'
import React from 'react'
import './Dashboard.scss'
import Logo from '../../assets/logo.svg'
import IconSun from '../../assets/icon/sun.svg'
import IconMoon from '../../assets/icon/moon.svg'

export const Dashboard = ({ children }) => (
  <div className="library">
    <header className="header">
      <div className="header-content responsive-wrapper">
        <div className="header-logo">
          <a href="#">
            <Logo />
            <span>Library</span>
          </a>
        </div>
        <div className="header-navigation">
          {/* Components type menu */}
          {/* <nav className="header-navigation-links">
            <a href="#">Home</a>
            <a href="#">Dashboard</a>
            <a href="#">Projects</a>
            <a href="#">Tasks</a>
            <a href="#">Reporting</a>
            <a href="#">Users</a>
          </nav> */}
        </div>
        <div className="header-navigation-actions">
          <a href="#" className="icon-button">
            <IconSun />
          </a>
        </div>
        <a href="#" className="button">
          <i className="ph-list-bold"></i>
          <span>Menu</span>
        </a>
      </div>
    </header>

    <main className="main">
      <div className="responsive-wrapper">
        <div className="content">
          <div className="content-panel">
            {/* Components list */}
            <div className="vertical-tabs">
              <a href="#" className="active">
                Buttons
              </a>
              <a href="#">Header</a>
              <a href="#">Forms</a>
              <a href="#">Tables</a>
            </div>
          </div>

          {/* Content */}
          <div className="content-main">{children}</div>
        </div>
      </div>
    </main>
  </div>
)
