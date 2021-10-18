import styled from "styled-components";

const StyledTitle = styled.section`
  display: flex;
  height: 70vh;

  div {
    flex: 50%;
  }

  div.left {
    padding: 0 2.5vw 0 8vw;
  }

  div.left h1 {
    margin: 8rem 0 4rem 0;
    font-size: 3.5rem;
  }

  .title_desc,
  a {
    font-size: 1.2rem;
  }

  .title_desc {
    width: 60%;
  }

  a {
    display: inline-block;
    padding: 15px 40px;
    border-radius: 30px;
    background-color: orange;
    text-decoration: none;
    color: white;
    cursor: pointer;
    margin-top: 15%;
  }

  div.right {
    padding: 2.5vw;
    align-self: center;
  }

  img {
    width: 100%;
    height: auto;
    border: 1px solid black;
    border-radius: 10px;
  }
`;

export default StyledTitle;
