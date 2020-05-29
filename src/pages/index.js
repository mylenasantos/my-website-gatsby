import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import AboutMe from "../pages/aboutMe"
import Skills from "../pages/skills"
import Project from "../pages/project"
import Contact from "../pages/contact"
const Home = () => (
  <Layout>
    <Header />
    <AboutMe />
    <Skills />
    <Project />
    <Contact />
  </Layout>
)

export default Home
