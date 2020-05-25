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
    background-color: #fcf3f3;

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
