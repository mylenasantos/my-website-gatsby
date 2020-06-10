import React from "react"
import { bool, func } from "prop-types"
import { StyledBurger } from "./styles"

const Burguer = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
Burguer.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burguer
