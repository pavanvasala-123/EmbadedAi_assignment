import React from "react";

import "../Home/Home.css";
import Banner from "../Banner/Banner";
import Foryou from "../ForYou/Foryou";
import SearchAndProfile from "../SearchAndProfile/SearchAndProfile";
import TryThese from "../TryThese/TryThese";
import Featured from "../Featured/Featured";
import Categories from "../Categories/Categories";
import Trysaying from "../TrySaying/Trysaying";

const Home = () => {
  return (
    <div className="home">
     <SearchAndProfile/>
     <Banner/>
     <Foryou />
     <TryThese/>
     <Featured/>
     <Categories/>
     <Featured/>
     <Trysaying/>
    
    </div>
  );
};

export default Home;
