import React from "react"
import { Container } from "./styles"
import Fade from "react-reveal/Fade"
import work from "../../images/work.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons"

const Project = () => (
  <Container id="project">
    <Fade left>
      <div className="divider">
        <img src={work} alt="work" />
      </div>
    </Fade>
    <Fade right>
      <div className={`divider right`}>
        <div className="content-right">
          <div className="project-line">
            <FontAwesomeIcon icon={faCoffee} />

            <span> - TW314</span>
            <span>
              {" "}
              - Projeto web integrado a um aplicativo mobile (Android) e um Web
              Service RESTful usando NodeJS. O projeto foi projetado para se
              comunicar diretamente com o sistema de atendimento de bancos,
              agências postais e outras entidades para otimizar a espera na fila
              em tempo real e notificar os clientes através de nosso aplicativo
              instalado.
            </span>
          </div>
          <div className="projects">
            <a href={"https://github.com/tw314"} target="_blank">
              Projeto TW314 no GitHub
            </a>
          </div>
          <div className="project-line">
            <FontAwesomeIcon icon={faCoffee} />

            <span> - Site Incentivar</span>
            <span>
              {" "}
              - Layout e integrações no site da empresa Incentivar.io.
              Utilizando NextJS.
            </span>
          </div>
          <div className="projects">
            <a href={"https://incentivar.io/en/"} target="_blank">
              Site da Incentivar
            </a>
          </div>
          <div className="project-line">
            <FontAwesomeIcon icon={faAndroid} className="icon" />
            <FontAwesomeIcon icon={faApple} className="icon" />

            <span> - Aplicativo de Relacionamento</span>
            <span>
              {" "}
              - Freelancer de um aplicativo em React-Native - em
              desenvolvimento.
            </span>
          </div>
        </div>
      </div>
    </Fade>
  </Container>
)

export default Project
