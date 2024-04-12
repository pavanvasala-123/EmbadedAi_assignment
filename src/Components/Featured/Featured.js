import React from 'react'
import FeaturedCard from './FeaturedCard'
import '../Featured/Featured.css'

const FeaturedCategory = [
    {image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7sdeoU8av63EELkNrW8S-5-VgnMUp7NFuuFG91Uice7YJ05qz',
     heading:"Character Assistant",
     subheading:"By @landon"
    ,paragraph:"Your AI work/study buddy"},
    {image:'https://characterai.io/i/80/static/avatars/uploaded/2022/10/14/MBXP1xg8RSeUskxBfNEuxo2lT4NSeqFkLGyudedEm3o.webp?webp=true&anim=0',
     heading:"Eula Lawrence",
     subheading:"By @loltyler1"
    ,paragraph:"Genshin impact| Vengeance"},
    {image:'https://characterai.io/i/80/static/avatars/uploaded/2023/2/6/6uC5oMKpqXhMR3g7l5qKJCNPNAYs7sMe4aH0Jtgm794.webp?webp=true&anim=0',
     heading:"Itoshi Rin",
     subheading:"By @milkmills"
    ,paragraph:"He only loves soccer..and you"},
    {image:'https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&anim=0',
     heading:"Librarian Linda",
     subheading:"By @noam"
    ,paragraph:"With Librairian Linda"},

    {image:'https://characterai.io/i/80/static/avatars/uploaded/Bx_uFQ2fP4WCGERxXIMk7iRy7IJbuR_Pz8jlisG07gg.webp?webp=true&anim=0',
     heading:"Psychologist",
     subheading:"By @Blazeman98"
    ,paragraph:"Someone who helps with life difficulties"},

    {image:'https://characterai.io/i/80/static/avatars/uploaded/2022/10/9/kOzn1SdDN1BEZFxhVSE-sRFybKkxMgY6MF7k58Feku4.webp?webp=true&anim=0',
     heading:"High-Fantasy RPG",
     subheading:"By @Tarquin"
    ,paragraph:"A high-fantasy txt-based adventure game, LitRPG"},
    {image:'https://characterai.io/i/80/static/avatars/TextAdventure3.png?webp=true&anim=0',
     heading:"Text Adventure Game",
     subheading:"By @Kayslay"
    ,paragraph:"Text Adventure Game"},
    {image:'https://characterai.io/i/80/static/avatars/uploaded/2022/11/20/vYyrMxepLOXDGRmK1Y-pIqwf3y7x9Dc1Aw7sDgb6fZc.webp?webp=true&anim=0',
     heading:"Your Homework Helper",
     subheading:"By @AI-Chatbot-Master"
    ,paragraph:"I'll help you with ALL  "},
    {image:'https://characterai.io/i/80/static/avatars/GamerBoy.png?webp=true&anim=0',
    heading:"Your Homework Helper",
    subheading:"By @AI-Chatbot-Master"
   ,paragraph:"I'll help you with ALL"},
   {image:'https://characterai.io/i/80/static/avatars/Shakespeare.webp?webp=true&anim=0',
   heading:"Your Homework Helper",
   subheading:"By @AI-Chatbot-Master"
  ,paragraph:"I'll help you with ALL "}
]

const Featured = () => {
  return (
    <div className='featured_main_container'>
        <p className='container_heading'>Featured</p>
        <div className='featured_cards_container'>
          {FeaturedCategory.map(eachItem =>  <FeaturedCard eachItem={eachItem}/>)}
          
        </div>
    </div>
  )
}

export default Featured
