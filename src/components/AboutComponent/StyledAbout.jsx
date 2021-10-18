import styled from "styled-components";

const StyledAbout = styled.section`
  padding: 3vw;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    border-bottom: 3px solid black;
    display: inline-block;
  }

  div {
    display: flex;

    div {
      width: 50vw;
    }
  }

  img {
    width: 100%;
    border-radius: 10px;
    border: 1px solid black;
  }

  .about_desc__wrapper {
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 1.2rem;
    width: 60%;
  }
`;

export default StyledAbout;
