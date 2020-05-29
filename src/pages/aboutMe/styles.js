import styled from "styled-components"

export const Container = styled.section`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .left {
    width: 50%;
    height: 100vh;
    background-color: #f69188;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
      width: 100%;

      .about {
        width: 90%;
      }
    }
  }

  .right {
    width: 50%;
    height: 100vh;
    background-color: #f3f7f1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) {
      width: 100%;
    }

    .me {
      width: 300px;
      max-width: 300px;
      height: 200px;
      border-radius: 50%;
    }

    .icon {
      opacity: 0.7;
      font-size: 45px;
      margin: 0px 5px 0px 0px;

      &-link {
        color: #0e76a8;
      }
      &-git {
        color: #000;
      }
      &-face {
        color: #3b5998;
      }
    }

    p {
      color: #424242;
      font-size: 20px;
      font-family: Didot, serif;
      text-align: center;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }
`
