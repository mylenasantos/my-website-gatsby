import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "../components/header"
import AboutMe from "../components/aboutMe"
const GlobalStyle = createGlobalStyle`
 html, body, #root {
   
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Didot, serif;
    
  }
  .content {
    margin: 0 auto;
    max-width: 90%;

    @media (min-width: 1024px) {
      max-width: 1276px;
    }
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <AboutMe />
    </React.Fragment>
  )
}
