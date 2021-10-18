import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 15vh;

  input {
    font-size: 1.2rem;
    border-radius: 10px;
    border: 1px solid gray;
    width: 300px;
    padding: 5px 10px;
  }

  nav ul {
    list-style-type: none;
    font-size: 1.6rem;
    font-weight: 600;
    /* letter-spacing: 1px; */
    padding: 0;
    margin: 0;
  }

  nav ul li {
    display: inline-block;
    padding: 10px;
    margin: 0 10px;
  }

  nav ul li a {
    text-decoration: none;
    color: black;
  }

  nav ul li a:hover {
    color: lightcoral;
  }
`;

export default StyledHeader;
