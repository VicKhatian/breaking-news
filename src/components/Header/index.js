import React from "react";
import { useState, useEffect } from "react";

const Header = ({ updateArticles }) => {
  //renders Header with logo and search bar
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${search}&token=${process.env.REACT_APP_APIKEY}&lang=en`
      );
      const fetchedData = await response.json();
      updateArticles(fetchedData.articles);
    }

    fetchData();
  }, [search]);
  //function for fetching data when search button is clicked
  async function handleClick() {
    setSearch(input);
  }

  return (
    <div className="header">
      <p className="logo">BREAKING NEWS</p>
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className="input-button" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Header;
