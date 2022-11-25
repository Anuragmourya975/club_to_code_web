import React from "react";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { Profile } from "./Profile";

function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;
