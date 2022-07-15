import React from "react";
import { useState } from "react";

const Header = () => {
  //renders Header with logo and search bar
  const [search, setSearch] = useState("");

  async function fetchData() {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${search}&token=${process.env.REACT_APP_API_TOKEN}&lang=en`
    );
    const fetchedData = await response.json();
    setSearch(fetchedData);
  }

  //function for fetching data when search button is clicked
  async function handleClick() {
    setSearch("");
  }

  return (
    <div className="header">
      <p className="logo">BREAKING NEWS</p>
      <div className="inputContainer">
        <input className="input" type="text" placeholder="Search"></input>
        <button className="input-button" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Header;
