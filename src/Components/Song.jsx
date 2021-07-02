import { useState } from "react";
import axios from "axios";
//import baseURL config from services
import { baseURL, config } from "../services";
import React from "react";
import { Link } from "react-router-dom";

function Song(props) {

  const { date, songName, artist, tuning, capo, chords } = props.song.fields;

  const deleteSong = async () => {
    //make specific url

    const songURL = `${baseURL}/${props.song.id}`;
    //make a delete request to that url
    await axios.delete(songURL, config);
    //trigger the useEffect
    props.setToggleFetch((curr) => !curr);
}

    return  (

      <article>
        <h3>{date}</h3>
        <h1>{songName}</h1>
      <h3>{artist}</h3>
      <h3>{tuning}</h3>
      <p>{capo}</p> 
      <p>{chords}</p> 


      <button onClick={deleteSong}>Delete song</button>

      <Link to={`/edit/${props.song.id}`}>
      <button>Edit Song</button>
      </Link>
    </article>

 )

    }

export default Song;