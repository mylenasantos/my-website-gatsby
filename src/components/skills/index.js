import React from "react"
import { Container } from "./styles"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faBootstrap,
  faHtml5,
  faCss3,
  faDocker,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons"

const Skills = () => (
  <Container id="skills">
    <Fade left>
      <div className="divider">
        <span className="text">Skills</span>
        <div>
          <FontAwesomeIcon icon={faReact} className={`icon icon-react`} />
          <FontAwesomeIcon icon={faBootstrap} className={`icon icon-boot`} />
          <FontAwesomeIcon icon={faHtml5} className={`icon icon-html`} />
          <FontAwesomeIcon icon={faCss3} className={`icon icon-css`} />
          <FontAwesomeIcon icon={faDocker} className={`icon icon-react`} />
          <FontAwesomeIcon icon={faNodeJs} className={`icon icon-node`} />
        </div>
      </div>
    </Fade>
    <Fade right>
      <div className={`divider right`}>
        <span>ReactJS</span>
        <div className="skill">
          <span className="bar-one"></span>
        </div>

        <Zoom right cascade>
          <span>Material-UI</span>
          <div className="skill">
            <span className="bar-one" style={{ width: "100%" }}></span>
          </div>
          <span>Consumo de APIs REST</span>
          <div className="skill">
            <span className="bar-one" style={{ width: "100%" }}></span>
          </div>
          <span>HTML5</span>
          <div className="skill">
            <span className="bar-one" style={{ width: "100%" }}></span>
          </div>

          <span>CSS3</span>
          <div className="skill">
            <span className="bar-one" style={{ width: "90%" }}></span>
          </div>
          <span>React-Native</span>
          <div className="skill">
            <span className="bar-one" style={{ width: "80%" }}></span>
          </div>
          <span>UX/UI</span>
          <div className="skill">
            <span className="bar-one" style={{ width: "50%" }}></span>
          </div>

          <span>Docker</span>
          <div className="skill">
            <span className="bar-one" style={{ width: "40%" }}></span>
          </div>
        </Zoom>
      </div>
    </Fade>
  </Container>
)

export default Skills
