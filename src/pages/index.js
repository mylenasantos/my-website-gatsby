import React, { useState } from "react"
import Header from "../components/header"
import Burguer from "../components/burguer"
import Layout from "../components/layout"
import AboutMe from "../pages/aboutMe"
import Skills from "../pages/skills"
import Project from "../pages/project"
import Contact from "../pages/contact"
function Home() {
  const [open, setOpen] = useState(false)

  return (
    <Layout>
      <Burguer open={open} setOpen={setOpen} />
      <Header open={open} setOpen={setOpen} />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
    </Layout>
  )
}

export default Home
