import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import AboutMe from "../pages/aboutMe"
import Skills from "../components/skills"
const Home = () => (
  <Layout>
    <Header />
    <AboutMe />
    <Skills />
  </Layout>
)

export default Home
