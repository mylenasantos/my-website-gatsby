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
    background-color: #eee980;

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

    .content-right {
      max-width: 500px;
      margin: 0 auto;

      @media (max-width: 1024px) {
        width: 83%;
      }

      .project-line {
        margin-top: 20px;
        margin-bottom: 10px;
      }

      .projects {
        margin-top: 10px;
        a {
          text-decoration: none;
          color: #f69188;
        }
      }
    }
  }
`
