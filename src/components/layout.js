import React, { useState } from "react"
import { createGlobalStyle } from "styled-components"
import Header from "../components/header"
import Burguer from "../components/burguer"

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
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      <GlobalStyle />
      <Burguer open={open} setOpen={setOpen} />
      <Header open={open} setOpen={setOpen} />
      <main>{children}</main>
    </React.Fragment>
  )
}
