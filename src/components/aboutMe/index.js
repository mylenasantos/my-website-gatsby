import { motion } from "framer-motion"
import { Container } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithubSquare,
  faFacebook,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"

import about from "../../images/about.svg"
import aboutMe from "../../images/me.png"

import React from "react"

const AboutMe = () => (
  <>
    <motion.section
      animate={{
        x: 0,
        y: 100,
        scale: 1,
        rotate: 0,
      }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Container id="aboutMe">
        <div className="left">
          <div className="content">
            <img className="about" src={about} />
          </div>
        </div>
        <div className="right">
          <img src={aboutMe} className="me" />
          <div className="content">
            <p>
              Meu nome é Mylena Santos, tenho 25 anos e 3 anos de  experiência
              trabalhando como desenvolvedora de software,  e minhas áreas de
              especialização incluem, ReactJs,  React-Native, JavaScript, 
              NodeJS, ERP Sage EM e SAFE X3  (linguagem back-end do ERP Sage). 
              No passado, fui responsável pelo monitoramento e 
              desenvolvimento de ferramentas
               para integração com serviços Web RESTful e 
              uso de APIs existentes. Atualmente trabalho com ReactJS
               em uma empresa de marketing de incentivo, 
              cujo produto titulado como Incentivar, que é um SaaS
              (Software as a Service), Além disso, tenho experiência em
               metodologias ágeis, onde tenho a responsabilidade de interagir e
               reunir requisitos dos stakeholders.
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} className={`icon icon-link`} />
            <FontAwesomeIcon
              icon={faGithubSquare}
              className={`icon icon-git`}
            />
            <FontAwesomeIcon icon={faFacebook} className={`icon icon-face`} />
            <FontAwesomeIcon icon={faMedium} className={`icon icon-git`} />
          </div>
        </div>
      </Container>
    </motion.section>
  </>
)

export default AboutMe
