import React, { useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

import StyledHeader from "./StyledHeader.jsx";

import { getMealByName } from "../../service.js";

const Header = ({ setHeadSearch }) => {
  const [query, setQuery] = useState("");
  // const location = useLocation();
  const history = useHistory();

  return (
    <StyledHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getMealByName(query).then((res) => {
            console.log(res.data.meals);
            setQuery("");
            setHeadSearch(res.data.meals);
            history.push("/search");
          });
        }}
      >
        <input
          type="text"
          id="search"
          placeholder="Search meals"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <nav id="navigation">
        <Router>
          <ul id="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Login</li>
            <li>
              <Link to="#about">About Us</Link>
            </li>
            <li>
              <Link to="#contact_us">Contact</Link>
            </li>
          </ul>
        </Router>
      </nav>
    </StyledHeader>
  );
};

export default Header;
