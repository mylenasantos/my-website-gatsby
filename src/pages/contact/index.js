import React from "react"
import { Container } from "./styles"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import contact from "../../images/contact.svg"

const Contact = () => (
  <Container id="contact">
    <Fade left>
      <div className="divider">
        <img src={contact} />
      </div>
    </Fade>
  </Container>
)

export default Contact
