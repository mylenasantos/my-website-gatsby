import React from "react"
import { Container } from "./styles"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
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
        <img src={contact} alt="contato" />
      </div>
    </Fade>
    <Fade right>
      <div className={`divider right`}>
        <span>cel: (11) 98493-0671</span>
        <div>
          <a href="mailto:myleena.santos@icloud.com" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className={`icon icon-mail`} />
          </a>
          <a
            href="https://www.linkedin.com/in/mylenasantos/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className={`icon icon-link`} />
          </a>
          <a href="https://github.com/mylenasantos" target="_blank">
            <FontAwesomeIcon
              icon={faGithubSquare}
              className={`icon icon-git`}
            />
          </a>
          <a href="https://www.facebook.com/mylena.santos1/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className={`icon icon-face`} />
          </a>
          <a href="https://medium.com/@mylenasantosgama" target="_blank">
            <FontAwesomeIcon icon={faMedium} className={`icon icon-git`} />
          </a>
        </div>
      </div>
    </Fade>
  </Container>
)

export default Contact
