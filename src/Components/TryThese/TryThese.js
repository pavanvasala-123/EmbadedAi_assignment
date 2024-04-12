import React from "react";
import TrytheseCard from "./TrytheseCard";
import "../TryThese/TryThese.css";

const tryThisCategory = [
    {image:'https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0',
     heading:"Practice a new language"
    ,paragraph:"With HyperGlot"},
    {image:'https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/gAKz4DRFDqYfmS2_7cQNq-anu45jPPLaFZPNxjpqAGI.webp?webp=true&anim=0',
     heading:"Practice Interviewing"
    ,paragraph:"With Interviewer"},
    {image:'https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/OpqG-QJWMMyTmkL9gI9496fevfGeJjfNj5aoyGtLqtQ.webp?webp=true&anim=0',
     heading:"Brainstrom ideas"
    ,paragraph:"With Brainstromer"},
    {image:'https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&anim=0',
     heading:"Get book recommendations"
    ,paragraph:"With Librairian Linda"},

    {image:'https://characterai.io/i/80/static/avatars/uploaded/2022/11/1/8vQT3XDnPkEHhafVac-ldiQCljC3kImrE9TiEXcIjKQ.webp?webp=true&anim=0',
    heading:"Plan a trip"
   ,paragraph:"With Trip planner"},
   {image:'https://characterai.io/i/80/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&anim=0',
    heading:"Write a story"
   ,paragraph:"With Creative Helper"},
   {image:'https://characterai.io/i/80/static/avatars/TextAdventure3.png?webp=true&anim=0',
    heading:"Play a game"
   ,paragraph:"With Text Advanture Game"},
   {image:'https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/D1Dar3krrm79DrKNlUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp?webp=true&anim=0',
    heading:"Help me make a decision"
   ,paragraph:"With DecisionHelper"}
]

const TryThese = () => {
  return (
    <div className="try_these_main_container">
      <p className="container_heading">Try these</p>
      <div className="try_these_cards_container">
        {tryThisCategory.map(eachItem =><TrytheseCard eachItem={eachItem}/>)}
        
      </div>
    </div>
  );
};

export default TryThese;
