// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

      const homeTextClassName = isDarkTheme
        ? 'home-text-light'
        : 'home-text-dark'

      return (
        <div className={`home-app-container ${homeBgClassName}`}>
          <Navbar />
          <div className="home-responsive-container">
            <div className="home-container">
              <img
                src={notFoundImageUrl}
                className="home-image-url"
                alt="Not Found"
              />
              <h1 className={`home-heading ${homeTextClassName}`}>
                Lost your Way?
              </h1>
              <p className={`home-heading ${homeTextClassName}`}>
                We cannot seem to find the page you are looking for
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
