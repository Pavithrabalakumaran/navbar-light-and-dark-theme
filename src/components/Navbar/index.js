// Write your code here

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navbarBackgroundImageClassName = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'

      const navItemClassName = isDarkTheme ? 'dark-theme' : 'light-theme'

      return (
        <div className={`navbar ${navbarBackgroundImageClassName}`}>
          <div className="navbar-content">
            <img
              src={websiteLogoUrl}
              className="website-logo"
              alt="website logo"
            />
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className={`nav-link ${navItemClassName}`}>
                  Home
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/about" className={`nav-link ${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>

            <button
              data-testid="theme"
              className="theme-button"
              type="button"
              onClick={onToggleTheme}
            >
              <img
                src={themeImageUrl}
                className="theme-image-url"
                alt="theme"
              />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
