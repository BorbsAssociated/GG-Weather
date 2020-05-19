import React, {useState} from "react";
import axios from "axios";


const ActionGamesTest = () => {

const [image,setImage] = useState("")
const [gameTitle, setGameTitle] = useState("")
const [description, setDescription] = useState("")
const [rating, setRating] = useState("")


  function getMoreInfo(gameId) {
    ////GET VIDEOGAME INFO BY ID (3498)
    axios({
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/games/"+gameId,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706",
      },
    })
      .then((response) => {
        console.log(response);
        setImage(response.data["background_image"])
        setGameTitle(response.data.name)
        setDescription(response.data.description)
        setRating(response.data.rating)
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(gameId);
  }

  return (
    <>
      <h2>Horror Games</h2>
      <ul>
        <li>
          <button onClick={() => getMoreInfo(58134)}>Spider-Man</button>
        </li>
        <li>
          <button onClick={() => getMoreInfo(3498)}>
            Grand Theft Auto V
          </button>
        </li>
        <li>
          <button onClick={() => getMoreInfo(22508)}>Overwatch</button>
        </li>
        <li>
          <button onClick={() => getMoreInfo(259801)}>
            Final Fantasy VII Remake
          </button>
        </li>
      </ul>

      <h2>Game Title:</h2>
      <h3>{gameTitle}</h3>
      <h3>Rating: {rating}</h3>
      <img src={image} width="600" height="400"></img>
      <h3>Description: {description}</h3>
    </>
  );
};

export default ActionGamesTest;
