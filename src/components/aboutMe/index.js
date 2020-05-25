import { motion, Framer } from "framer-motion"
import { Container } from "./styles"
import myPhoto from "../../images/me.png"
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
      <Container>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <img src={myPhoto} />
        </motion.div>
      </Container>
    </motion.section>
  </>
)

export default AboutMe
