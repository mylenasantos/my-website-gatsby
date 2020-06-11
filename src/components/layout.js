import React, { useState, useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
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
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(1440)

  useEffect(() => {
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0

    setWindowSize(windowWidth)
  }, [])
  return (
    <>
      <GlobalStyle />
      <Burguer open={open} setOpen={setOpen} />
      <Header open={open} setOpen={setOpen} windowWidth={windowSize} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
