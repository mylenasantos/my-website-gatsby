import { Container } from "./styles"
import codeGirl from "../../images/girl.jpeg"
import { motion } from "framer-motion"
import React from "react"

const Header = () => (
  <>
    <motion.header
      animate={{
        x: 0,
        y: window.innerWidth >= 1024 ? 20 : 70,
        scale: 1,
        rotate: 0,
      }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Container>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 1 }}
          whileTap={{
            scale: 0.8,
            rotate: 10,
          }}
        >
          <img src={codeGirl} alt="girl coder" />
        </motion.div>
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#project">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <a href="#moreinfo">Mais Informações</a>
          </li>
        </ul>
      </Container>
    </motion.header>
  </>
)

export default Header
