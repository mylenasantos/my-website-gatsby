import styled from "styled-components"

export const Container = styled.section`
  height: 90px;
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 88%;
    opacity: 0.7;
    margin-top: 300px;

    @media (min-width: 1000px) {
      margin: 250px 40px 0px 54px;
      width: 30%;
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
`
