import React, { useState } from "react";
import "../css/navbarGuest.css";
import offcourse from "../images/offcourse.png";

function NavbarGuest() {
  const [search, setSearch] = useState("");
  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div className="container">
      <img src={offcourse} alt="offcourse-logo" />
      <p>Explore</p>

      <input
        className="searchbar"
        value={search}
        onChange={handleSearch}
        placeholder="Search for anything..."
      />

      <div className="join-container">
        <button className="login">Log in</button>
        <button className="signup">Sign up for free</button>
      </div>
    </div>
  );
}

export default NavbarGuest;
