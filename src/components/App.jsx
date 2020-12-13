import React from "react"
import {Other} from "./Other.jsx"


export const App = (props)=> {



  return (
    <>
      <h1>Moe Farid's Portfolio</h1>

<Other name= "Digital Newsstand" git = "https://github.com/mfarid99/projects.git" live = "https://moenewsapp.herokuapp.com/" img = "https://i.imgur.com/LeJmieu.png" tools = "Javascript, HTML, CSS, Jquery, API"/> 

<Other name= "Metallica Fanpage" git = "https://github.com/mfarid99/Metallica-Fans.git" live = "https://metallicafans.herokuapp.com/" img = "https://i.imgur.com/2jyBHwI.png" tools = "Javascript, HTML, CSS, React, Express, MongoDB, Heroku" /> 

<Other name= "G.O.A.T" git = " FE: https://github.com/mfarid99/Boxer_FE" live = "https://lucid-kare-cea573.netlify.app/" img = "https://i.imgur.com/sLqTJQj.png" tools = "Ruby On Rails, React, CSS, Postman, Heroku, Netlify" /> 


    </>
  )
}