import styled from "styled-components";

const StyledResultsPage = styled.div`
  padding: 2rem;

  .meal_and_select {
    display: flex;
    justify-content: space-between;
  }

  .recommended_meal {
    width: 320px;

    .search {
      margin: 0;
    }
  }

  .meal_category,
  .meal_country {
    text-align: center;
  }

  .search_title {
    display: inline-block;
    font-size: 3.5rem;
    font-weight: 400;
    border-bottom: 2px solid gray;
  }

  select {
    font-size: 1.2rem;
    border-radius: 10px;
    border: 1px solid gray;
    padding: 5px 10px;
    align-self: flex-end;
  }
`;

export default StyledResultsPage;
