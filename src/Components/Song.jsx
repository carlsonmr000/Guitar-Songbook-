import { useState, useEffect } from "react";
import axios from "axios";
//import baseURL config from services
import { baseURL, config } from "../services";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

function Song(props) {

  const [date, setDate] = useState("");
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [tuning, setTuning] = useState("");
  const [capo, setCapo] = useState("");
  const [chords, setChords] = useState("");
  
   const history = useHistory();  
  const params = useParams();

  useEffect(() => {

    if(params.id && props.song.length > 0) {
        const songToEdit = props.song.find((song) => song.id === params.id);

         if(songToEdit) { 
             setDate(songToEdit.song.fields.date);
             setSongName(songToEdit.song.fields.songName);
             setArtist(songToEdit.song.fields.artist);
             setTuning(songToEdit.song.fields.tuning);
             setCapo(songToEdit.song.fields.capo);
             setChords(songToEdit.song.fields.chords);
         }
    }

}, [params.id, props.song])
    //collect all the info in object called newSnack

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      //collect all the info in object called newSnack
      const newSong = {
        date,
        songName,
        artist,
        tuning,
        capo,
        chords
    };
  
      if(params.id) {
          const songURL = `${baseURL}/${params.id}`;
          await axios.put(songURL, { fields: newSong }, config)
      } else {
     
          await axios.post(baseURL, { fields: newSong }, config);
      }
      //make an axios post request to the baseurl with the data and our config
  
  
      //trigger our useEffect
  
   
      setTimeout(() => {
          
          history.push("/");
      }, 1000);
  
  
  
  }
   return (  

    <div className="App">
      <h1> {props.song.fields.date}</h1>
      <h2> {props.song.fields.songName}</h2>
      <h2> {props.song.fields.artist}</h2>
      <h2> {props.song.fields.tuning}</h2>
      <h2> {props.song.fields.capo}</h2>
      <h2> {props.song.fields.chords}</h2>
      <button>Edit</button>
      <button>Delete</button>
    </div>

  );
}

export default Song;
