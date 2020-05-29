import React from "react"
import { Container } from "./styles"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import work from "../../images/work.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

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
              - Projeto web com Django e Python, integrado a um aplicativo
              mobile (Android) e um Web Service RESTful usando NodeJS. O projeto
              foi projetado para se comunicar diretamente com o sistema de
              atendimento de bancos, agências postais e outras entidades para
              otimizar a espera na fila em tempo real e notificar os clientes
              através de nosso aplicativo instalado.
            </span>
          </div>
          <div className="projects">
            <a href={"https://github.com/orgs/TW314/dashboard"}>
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
            <a href={"https://incentivar.io/en/"}>Site da Incentivar</a>
          </div>
        </div>
      </div>
    </Fade>
  </Container>
)

export default Project
