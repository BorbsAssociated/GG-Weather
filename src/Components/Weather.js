import React, {useState} from "react";
import axios from "axios";
import GameGallery from "./GameGallery";
import {v4 as uuidv4} from "uuid";

function Weather() {

    const [location, setLocation] = useState("");
    const [weather,setWeather] = useState("")
    const [description,setDescription] = useState("")
    const [tempCelsius, setTempCelsius] = useState("")
    const [tempFarenheit, setTempFarenheit] = useState("")
    const [submitLocation, setSubmitLocation] = useState("");

function convertToFarenheit(tempKelvin){
      return Math.round(((tempKelvin - 273.15) * 9/5 + 32), 1) + "°F";
    }
    function convertTemp(tempKelvin){
      return Math.round((tempKelvin - 273.15), 1) + "°C";
    }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=89e18fe833ea4fde74592dc27b57d117`)
      .then((response)=>{
        setTempFarenheit(convertToFarenheit(response.data.main.temp))
        setTempCelsius(convertTemp(response.data.main.temp))
        setWeather(response.data.weather[0].main)
        setDescription(response.data.weather[0].description)
      })
      .catch((error)=>{
        console.log(error)
      })

       //window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

    return (
        <>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={location}
          onChange={(e) => (setLocation(e.target.value))}
        />
        <button className="btn btn-success" onClick={()=>setSubmitLocation(location)}>Add City</button>
      </form>

        <h2>Your city is {submitLocation}</h2>
        <h3>The weather is {weather} </h3>
        <h4>Temperature: {tempCelsius} / {tempFarenheit}</h4>
        <GameGallery key = {uuidv4()} weather = {weather}/>
        </>
    )
}

export default Weather;


    ///// RAKUTEN OPEN WEATHER MAP - SEARCH WEATHER DATA
    //let locationWeather = ''
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
    //   "q":locationWeather
    //   }
    // //   })
    // console.log(response.data.list[0].weather[0].main)
    // console.log(response.data.list[0].weather[0].description)
    // setWeather(response.data.list[0].weather[0].main)
    // setDescription(response.data.list[0].weather[0].description)