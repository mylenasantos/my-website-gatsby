import styled from "styled-components"

export const Container = styled.header`
  height: 90px;
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;

    @media (min-width: 1000px) {
      margin: 76px 40px 0px 54px;
    }
  }
  ul {
    margin: 0;
    display: flex;
    flex-direction: column;

    @media (min-width: 1000px) {
      flex-direction: row;
    }
  }
  li {
    margin: 0;
    list-style: none;

    a {
      list-style: none;
      color: #e2a286;
      cursor: pointer;
      text-decoration: none;
    }

    @media (min-width: 1024px) {
      margin: 0 50px;
      font-size: 20px;
    }
  }

  /* div {
    margin: 0 auto;
    max-width: 960px;
    padding: 10px;
  } */
`
