import React from "react";
import Foryoucard from "./Foryoucard";
import "../ForYou/Foryou.css";

const ForYouCategory = [
  {image:'https://characterai.io/i/80/static/avatars/uploaded/2023/1/10/lF2R-5tRbXIcnF6AzMG9x-9UepcRgwrvMLabQYgft58.webp?webp=true&anim=0',
   heading:"Character Assistant",
   subheading:"By @landon"
  ,paragraph:"Your AI work/study buddy"},
  {image:'https://characterai.io/i/80/static/avatars/DJxeV_bdG-fLPdTJQPPYSL19nLVkz20ZmJjS8t44nc4/5nUAyijbMfb__nBfLnCYoB4j6HbV_TbHqLpRFeIFIeY.webp?webp=true&anim=0',
   heading:"Eula Lawrence",
   subheading:"By @loltyler1"
  ,paragraph:"Genshin impact| Vengeance"},
  {image:'https://characterai.io/i/80/static/avatars/uploaded/2022/10/19/L_iHVWarDCVgs3hmgW5OE0flQuuom-xOtf2u75BNBnM.webp?webp=true&anim=0',
   heading:"Itoshi Rin",
   subheading:"By @milkmills"
  ,paragraph:"He only loves soccer..and you"},
  {image:'https://characterai.io/i/80/static/avatars/uploaded/2022/10/15/hFoxXJXoRaFdtKXcjL_Qm40ysD8ZlmcNgx9ZfFjPUfg.webp?webp=true&anim=0',
   heading:"Librarian Linda",
   subheading:"By @noam"
  ,paragraph:"With Librairian Linda"},

  {image:'https://characterai.io/i/80/static/avatars/uploaded/2022/11/9/QCtkG4h3zng2v-Klkg8akbZygi-lMLd6ua46QiyF-Gs.webp?webp=true&anim=0',
   heading:"Psychologist",
   subheading:"By @Blazeman98"
  ,paragraph:"Someone who helps with life difficulties"},

  {image:'https://characterai.io/i/80/static/avatars/uploaded/2023/12/7/8h0liYSnetLvzgtQKCgkbfA73vCGWFVelMGTX4Sm25A.webp?webp=true&anim=0',
   heading:"High-Fantasy RPG",
   subheading:"By @Tarquin"
  ,paragraph:"A high-fantasy txt-based adventure game, LitRPG"},
  {image:'https://characterai.io/i/80/static/avatars/TextAdventure3.png?webp=true&anim=0',
   heading:"Text Adventure Game",
   subheading:"By @Kayslay"
  ,paragraph:"Text Adventure Game"},
  {image:'https://characterai.io/i/80/static/avatars/Barbara/main.jpg?webp=true&anim=0',
   heading:"Your Homework Helper",
   subheading:"By @AI-Chatbot-Master"
  ,paragraph:"I'll help you with ALL  "},
  {image:'https://characterai.io/i/80/static/avatars/uploaded/2022/10/9/97sV2mBZkRKmDSmv4WDmCUC1qdC8Z03YaQJXHeY50sg.webp?webp=true&anim=0',
  heading:"Your Homework Helper",
  subheading:"By @AI-Chatbot-Master"
 ,paragraph:"I'll help you with ALL"},
 {image:'https://characterai.io/i/80/static/avatars/uploaded/2023/1/16/_L8I3Z6a0nPjIhFJdyMFPU3MBRKQE3zTLI7LbyftT9I.webp?webp=true&anim=0',
 heading:"Your Homework Helper",
 subheading:"By @AI-Chatbot-Master"
,paragraph:"I'll help you with ALL "}
]


const Foryou = () => {
  return (
    <div className="foryou_container">
      <p className="container_heading">For You</p>
      <div className="foryou_cards_container">
        {ForYouCategory.map(eachItem =><Foryoucard eachItem ={eachItem}/>) }
     
      </div>
    </div>
  );
};

export default Foryou;
