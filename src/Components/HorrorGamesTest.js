import React from "react";

const HorrorGamesTest = () => {

    function getMoreInfo(game) {
        console.log(game)
    }

    return (
    <>
    <h2>Horror Games</h2>
        <ul>
            <li >
                <button onClick = {() => getMoreInfo("Bloodborne")}>Bloodborne</button> 
            </li>
            <li >
                <button onClick = {() => getMoreInfo("The Evil Within")}>The Evil Within</button> 
            </li>
            <li >
                <button onClick = {() => getMoreInfo("Resident Evil 7")}>Resident Evil 7</button> 
            </li>
            <li >
                <button onClick = {() => getMoreInfo("Inside")}>Inside</button> 
            </li>
        </ul>
    </>
    )
}

export default HorrorGamesTest