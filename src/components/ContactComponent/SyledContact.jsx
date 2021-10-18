import styled from "styled-components";

const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 40px 0;

  h1 {
    font-size: 2rem;
    border-bottom: 3px solid black;
    margin-bottom: 60px;
    font-weight: 400;
  }

  input,
  textarea,
  button {
    padding: 10px;
  }

  input,
  textarea {
    width: 500px;
    border-radius: 10px;
    border: 1px solid gray;
    margin-bottom: 20px;
    font-size: inherit;
    font-family: inherit;
  }

  textarea,
  button {
    margin-top: 20px;
  }

  button {
    border: none;
    font-size: inherit;
    font-weight: 600;
    border-radius: 10px;
    background-color: orange;
    color: white;
    cursor: pointer;
    width: 150px;
  }

  button:hover {
    border: 1px solid black;
  }
`;

export default StyledContact;
