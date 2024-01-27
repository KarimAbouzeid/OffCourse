import React from "react";
import NavbarGuest from "../components/NavbarGuest";
import HeroBanner from "../components/HeroBanner";
import PopularCourses from "../components/PopularCourses";

function Home() {
  return (
    <div>
      <NavbarGuest />
      <hr />
      <HeroBanner />
      <PopularCourses />
    </div>
  );
}

export default Home;
