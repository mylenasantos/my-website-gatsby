import { StyledMenu } from "./styles"
import codeGirl from "../../images/girl.jpeg"
import code from "../../images/code.png"
import { motion } from "framer-motion"
import { bool } from "prop-types"

import React from "react"

const Header = ({ open }) => {
  return (
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
        {/* <img src={code}></img> */}
        <StyledMenu open={open}>
          <div className="image">
            <img src={codeGirl} alt="girl coder" />
          </div>

          <a href="#aboutMe">Sobre mim</a>

          <a href="#skills">Skills</a>

          <a href="#project">Projetos</a>

          <a href="#contact">Contato</a>
        </StyledMenu>
      </motion.header>
    </>
  )
}
Header.propTypes = {
  open: bool.isRequired,
}

export default Header
