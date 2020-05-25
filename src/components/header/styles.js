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
    color: #dd3a44;
    cursor: pointer;
    font-family: fantasy;

    @media (min-width: 1000px) {
      margin: 0 50px;
    }
  }

  /* div {
    margin: 0 auto;
    max-width: 960px;
    padding: 10px;
  } */
`
