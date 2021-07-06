import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
//import baseURL config from services
import { baseURL, config } from "../services";
import React from "react";
import { Link } from "react-router-dom";

function Song(props) {
  const { date, songName, artist, tuning, capo, chords } = props.song.fields;

  const history = useHistory();

  const deleteSong = async () => {
    //make specific url

    const songURL = `${baseURL}/${props.song.id}`;
    //make a delete request to that url
    await axios.delete(songURL, config);
    //trigger the useEffect
    setTimeout(() => {
      history.push("/");
    });
    props.setToggleFetch((curr) => !curr);
  };

  return (
    
      <article>
        <h1>{songName}</h1>
        <h2>{artist}</h2>
        <p>{tuning}</p>
        <p>{capo}</p>
        <p>{chords}</p>
        <p>{date}</p>

        <button class="delete" onClick={deleteSong}>Delete song</button>

        <Link to={`/edit/${props.song.id}`}>
          <button class="edit">Edit Song</button>
        </Link>

        <Link to={`/show/${props.song.id}`}>
          <button class="show">Show more</button>
        </Link>

      </article>
  
  );
}

export default Song;
