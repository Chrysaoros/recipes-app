import React from "react";

import CategoryImageCardList from "../../CategoryImageCardListComponent/CategoryImageCardList.jsx";
import About from "../../AboutComponent/About.jsx";
import Contact from "../../ContactComponent/Contact.jsx";
import Title from "../../TitleComponent/Title.jsx";

const HomePage = ({ categories, setCategory }) => {
  return (
    <>
      <Title />
      <CategoryImageCardList
        arr={categories}
        setState={setCategory}
        divId="categories"
        divClass="categories"
        linkTo="/category"
      />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
