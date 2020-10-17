import React from "react"
import {
    FaGithub,
    FaCodepen,
    FaFreeCodeCamp,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa"
import "./footer.scss"

const Footer=()=>{
    return(
        <footer className="footer">
        <div className="footer__links">
          <ul>
            <li>
              <a href="https://github.com/raghuKM" target="blank">
                <FaGithub className="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/raghuKM/"
                target="blank"
              >
                <FaLinkedin className="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/raghuKM" target="blank">
                <FaFreeCodeCamp className="icon" />
              </a>
            </li>
            <li>
              <a href="https://codepen.io/raghuKM" target="blank">
                <FaCodepen className="icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/raghukM.atl/"
                target="blank"
              >
                <FaInstagram className="icon" />
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__text"> © {new Date().getFullYear()}, Built by raghuKM</p>
      </footer>
    )
}

export default Footer