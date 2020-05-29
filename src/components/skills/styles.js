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
    background-color: #fff;
    margin-top: 100px;

    .text {
      color: #000;
      text-align: center;
      font-size: 60px;
    }
    .icon {
      opacity: 0.7;
      font-size: 45px;
      margin: 0px 5px 0px 0px;

      &-react {
        color: #61dbfb;
      }
      &-boot {
        color: #553c7b;
      }
      &-html {
        color: #e44d26;
      }
      &-css {
        color: #264de4;
      }
      &-docker {
        color: #0db7ed;
      }
      &-node {
        color: #68a063;
      }
    }
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  .right {
    background-color: #f3f7f1;

    .skill {
      height: 20px;
      position: relative;
      background: #f3efef;
      border-radius: 25px;
      border: 2px solid #aca0a0;
      margin-top: 10px;
      margin-bottom: 10px;
      width: 90%;
      .bar-one {
        display: block;
        height: 100%;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: #c2ead8;
        border-radius: 25px;
        position: relative;
        overflow: hidden;
        width: 100%;
      }
    }
  }
`
