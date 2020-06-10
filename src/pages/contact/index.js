import React from "react"
import { Container } from "./styles"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithubSquare,
  faFacebook,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import contact from "../../images/contact.svg"

const Contact = () => (
  <Container id="contact">
    <Fade left>
      <div className="divider">
        <img src={contact} />
      </div>
    </Fade>
    <Fade right>
      <div className={`divider right`}>
        <span>E-mail: myleena.santos@icloud.com</span>
        <span>cel: (11) 98493-0671</span>
        <div>
          <a href="https://www.linkedin.com/in/mylenasantos/">
            <FontAwesomeIcon icon={faLinkedin} className={`icon icon-link`} />
          </a>
          <a href="https://github.com/mylenasantos">
            <FontAwesomeIcon
              icon={faGithubSquare}
              className={`icon icon-git`}
            />
          </a>
          <a href="https://www.facebook.com/mylena.santos1/">
            <FontAwesomeIcon icon={faFacebook} className={`icon icon-face`} />
          </a>
          <a href="https://medium.com/@mylenasantosgama">
            <FontAwesomeIcon icon={faMedium} className={`icon icon-git`} />
          </a>
        </div>
      </div>
    </Fade>
  </Container>
)

export default Contact
