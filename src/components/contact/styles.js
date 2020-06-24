import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .divider {
    height: 100vh;
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #aca0a0;

    @media (max-width: 1024px) {
      width: 100%;
      .work {
        width: 90%;
      }
    }
  }
  .right {
    background-color: #fff;
    justify-content: center;
    align-items: center;
    .icon {
      opacity: 0.7;
      font-size: 45px;
      margin: 0px 5px 0px 0px;

      &-link {
        color: #0e76a8;
      }
      &-mail {
        color: #757575;
      }
      &-git {
        color: #000;
      }
      &-face {
        color: #3b5998;
      }
    }
    span {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .content-right {
      max-width: 500px;
      margin: 0 auto;

      @media (max-width: 1024px) {
        width: 83%;
      }
    }
  }
`
