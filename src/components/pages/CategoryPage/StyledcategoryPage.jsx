import styled from "styled-components";

const StyledCategoryPage = styled.div`
  padding: 2rem;

  .meal_and_search {
    display: flex;
    justify-content: space-between;
  }

  .recommended_meal {
    width: 320px;

    .meal {
      margin: 0;
    }
  }

  .category_title {
    display: inline-block;
    font-size: 3.5rem;
    font-weight: 400;
    border-bottom: 2px solid gray;
  }

  input {
    font-size: 1.2rem;
    border-radius: 10px;
    border: 1px solid gray;
    width: 300px;
    padding: 5px 10px;
    align-self: flex-start;
    margin-right: 10vw;
  }
`;

export default StyledCategoryPage;
