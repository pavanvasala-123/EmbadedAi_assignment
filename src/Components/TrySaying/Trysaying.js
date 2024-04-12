import React from "react";
import TrySayingCard from "./TrySayingCard";
import "../TrySaying/TrySaying.css";

const Trysaying = () => {
  return (
    <div className="try_saying_main_container">
      <p className="container_heading">Try Saying</p>
      <div className="try_saying_cards_container">
        <TrySayingCard />
        <TrySayingCard />
        <TrySayingCard />
        <TrySayingCard />
        <TrySayingCard />
        <TrySayingCard />
      </div>
    </div>
  );
};

export default Trysaying;
