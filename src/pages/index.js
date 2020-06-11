import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import AboutMe from "../components/aboutMe"
import Skills from "../components/skills"
import Project from "../components/project"
import Contact from "../components/contact"

const IndexPage = () => {
  const [windowSize, setWindowSize] = useState(1439)

  useEffect(() => {
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0

    setWindowSize(windowWidth)
  }, [])
  return (
    <Layout>
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
    </Layout>
  )
}

export default IndexPage
