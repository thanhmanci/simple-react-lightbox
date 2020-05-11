import React from 'react'
import SRLLogo from '../assets/images/SRL_Logo.png'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="row  align-items-center">
          <div className="SRL_Logo col-md-4">
            <img
              src={SRLLogo}
              alt="Simple React Lightbox - A simple but functional light-box for React"
            />
          </div>

          <div className="col-md-4 ml-auto">
            {/* Check the Button component to see how it implements the High Order Component */}
            <Button />
          </div>

          <div className="col-12">
            <nav>
              <ul>
                <li>
                  <Link to="/">Gallery</Link>
                </li>
                <li>
                  <Link to="/with-text/">Gallery and text</Link>
                </li>
                <li>
                  <Link to="/with-thumbs/">Gallery with thumbs</Link>
                </li>
                <li>
                  <Link to="/with-images-as-prop/">
                    Gallery with images as prop
                  </Link>
                </li>
                <li>
                  <Link to="/with-api/">Gallery with API</Link>
                </li>
                <li>
                  <Link to="/with-hook/">Gallery With Hook</Link>
                </li>
                <li>
                  <Link to="/with-callbacks/">Gallery With Callbacks</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
