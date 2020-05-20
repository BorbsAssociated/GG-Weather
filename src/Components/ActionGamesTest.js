import React, {useState, Fragment, useEffect} from "react";
import axios from "axios";


const ActionGamesTest = () => {

let tempRandomGameArray = [22508,58812,29338,254542,37357,7689,274480,3556,39,1438,59632,421698]
let tempImageSourceArray = []

const [image,setImage] = useState("")
const [gameTitle, setGameTitle] = useState("")
const [description, setDescription] = useState("")
const [rating, setRating] = useState("")

  React.useEffect(() => {
    for (let i = 0; i<tempRandomGameArray.length; i++){  
      axios({
        method: "GET",
        url: "https://rawg-video-games-database.p.rapidapi.com/games/"+tempRandomGameArray[i],
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": "5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706",
        },
      })
        .then((response) => {
          console.log(response);
          setImage(response.data["background_image"])
          tempImageSourceArray.push(response.data["background_image"])
          setGameTitle(response.data.name)
          setDescription(response.data.description)
          setRating(response.data.rating)
        })
        .catch((error) => {
          console.log(error);
        });
      }
  }, [])

  //function getMoreInfo() {
    ////GET VIDEOGAME INFO BY ID (3498)
  // for (let i = 0; i<tempRandomGameArray.length; i++){  
  //   axios({
  //     method: "GET",
  //     url: "https://rawg-video-games-database.p.rapidapi.com/games/"+tempRandomGameArray[i],
  //     headers: {
  //       "content-type": "application/octet-stream",
  //       "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
  //       "x-rapidapi-key": "5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706",
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       setImage(response.data["background_image"])
  //       tempImageSourceArray.push(response.data["background_image"])
  //       setGameTitle(response.data.name)
  //       setDescription(response.data.description)
  //       setRating(response.data.rating)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   }
  //}

  //getMoreInfo()
  console.log("tempImageSourceArray",tempImageSourceArray);

  return (
    <Fragment>
			{' '}
			<table className="table mt-5 text-center">
				<thead>
					<tr>
						<th>Game</th>
					</tr>
				</thead>
				<tbody>
					{tempImageSourceArray.map((game) => (
						<tr key={game}>
							<td><img src={game} width="600" height="400"></img></td>
						</tr>
					))}
				</tbody>
			</table>
		</Fragment>
  );
};

export default ActionGamesTest;