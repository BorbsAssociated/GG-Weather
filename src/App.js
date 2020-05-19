import React from 'react';
import logo from './logo.svg';
import axios from "axios"
import './App.css';
import gamesByGenera from "./data"
import ActionGamesTest from "./Components/ActionGamesTest"

function App() {

///// RAKUTEN OPEN WEATHER MAP - SEARCH WEATHER DATA

let locationWeather = ''

// axios({
//   "method":"GET",
//   "url":"https://community-open-weather-map.p.rapidapi.com/find",
//   "headers":{
//   "content-type":"application/octet-stream",
//   "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
//   "x-rapidapi-key":"5cc4b597d5mshcd02023aa7ff562p1fa030jsn879d1ba96904"
//   },"params":{
//   "type":"link%2C accurate",
//   "units":"imperial%2C metric",
//   "q":"Osaka"
//   }
//   })
//   .then((response)=>{
//     console.log(response)
//     locationWeather = response.data.list[0].weather[0];
//     console.log(locationWeather)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })



//GET GENRE DETAILS
  // axios({
  //     "method":"GET",
  //     "url":"https://rawg-video-games-database.p.rapidapi.com/genres/%7Bid%7D",
  //     "headers":{
  //     "content-type":"application/octet-stream",
  //     "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
  //     "x-rapidapi-key":"5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706"
  //     }
  //     })
  //     .then((response)=>{
  //       console.log(response)
  //     })
  //     .catch((error)=>{
  //       console.log(error)
  //     })

////GET VIDEOGAME INFO BY ID (3498)
  axios({
    "method":"GET",
    "url":"https://rawg-video-games-database.p.rapidapi.com/games/58134",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key":"5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })




let ourVideoGameGeneres = []

//GET A LIST OF VIDEOGAMES GENERES

  // let videoGameGeneres = {}
  // let vgGeneres = []
  // axios({
  //   "method":"GET",
  //   "url":"https://rawg-video-games-database.p.rapidapi.com/genres",
  //   "headers":{
  //   "content-type":"application/octet-stream",
  //   "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
  //   "x-rapidapi-key":"5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706"
  //   }
  //   })
  //   .then((response)=>{
  //     console.log(response)
  //     videoGameGeneres = response.data.results
  //     console.log(videoGameGeneres)
  //     vgGeneres = videoGameGeneres.map(genere => genere.name)
  //     console.log(vgGeneres)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
///////
///////

    //  vgGeneres = ["Action", "Indie", "Adventure", "RPG", "Strategy", 
    //               "Shooter", "Casual", "Simulation", "Puzzle", "Arcade", 
    //               "Platformer", "Racing", "Sports", "Massively Multiplayer", 
    //               "Family", "Fighting", "Board Games", "Educational", "Card"]
    

    let weathers = ["Mist","Smoke","Haze","Dust","Fog","Sand","Dust","Ash",
                    "Squall","Tornado","Snow","Rain","Drizzle","Thunderstorm",
                    "Clear","Clouds"]

    
    let weatherVGMappings = {
      "Mist" : "Strategy"
    }



  return (
    <div className="App">
     <h1>BORBS ASSOCIATED</h1>
     <h4>presents</h4>
     <h1>GG WEATHER</h1>
     <ActionGamesTest />
    </div>
  );
}

export default App;
