import { StyledMenu } from "./styles"
import codeGirl from "../../images/girl.jpeg"
import Fade from "react-reveal/Fade"
import { motion } from "framer-motion"
import { bool } from "prop-types"

import React from "react"

const Header = ({ open, windowWidth }) => {
  console.log(windowWidth)
  return (
    <>
      <motion.header
        animate={{
          x: 0,
          y: windowWidth >= 1024 ? 20 : 70,
          scale: 1,
          rotate: 0,
        }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <StyledMenu open={open}>
          <Fade left>
            <div className="image">
              <img src={codeGirl} alt="girl coder" />
            </div>
            <a href="#aboutMe">Sobre mim</a>

            <a href="#skills">Skills</a>

            <a href="#project">Projetos</a>

            <a href="#contact">Contato</a>
          </Fade>
        </StyledMenu>
      </motion.header>
    </>
  )
}
Header.propTypes = {
  open: bool.isRequired,
}

export default Header
