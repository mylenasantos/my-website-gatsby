import styled from "styled-components"

export const StyledMenu = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: relative;
  height: ${({ open }) => (open ? "100%" : "0")};
  padding: 2rem;
  top: 0;
  left: 0;

  @media (max-width: 576px) {
    width: 100%;
    padding: 0;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      @media (min-width: 1000px) {
        margin: 76px 40px 0px 54px;
        width: 200px;
        height: 200px;
      }
    }
  }

  a {
    font-size: 13px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #000;
    text-decoration: none;
    transition: color 0.5s linear;

    @media (max-width: 576px) {
      font-size: 12px;
      text-align: center;
    }

    &:hover {
      color: red;
    }
  }
`
