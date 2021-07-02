import { useState } from "react";
import axios from "axios";
//import baseURL config from services
import { baseURL, config } from "../services";
import React from "react";
import { useHistory } from "react-router-dom";


function Form(props) {

const [date, setDate] = useState("");
const [songName, setSongName] = useState("");
const [artist, setArtist] = useState("");
const [tuning, setTuning] = useState("");
const [capo, setCapo] = useState("");
const [chords, setChords] = useState("");

 const history = useHistory();
    
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
    
       
 
         
       
            await axios.post(baseURL, { fields: newSong  }, config);
        
        //make an axios post request to the baseurl with the data and our config

        history.push("/");
    
    }

    return (
      
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date: </label>
          <input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>

          <label htmlFor="songName">Song Name: </label>
          <input type="text" id="songName" value={songName} onChange={(e) => setSongName(e.target.value)}/>

          <label htmlFor="artist">Artist: </label>
          <input type="text" id="artist" value={artist} onChange={(e) => setArtist(e.target.value)}/>

          <label htmlFor="tuning">Tuning: </label>
          <input type="text" id="tuning" value={tuning} onChange={(e) => setTuning(e.target.value)}/>

          <label htmlFor="capo" >Capo: </label>
          <input name="" id="capo" value={capo} onChange={(e) => setCapo(e.target.value)}  ></input>

          <label htmlFor="chords">Chords: </label>
          <input type="text" id="chords" value={chords} onChange={(e) => setChords(e.target.value)}/>

          <button type="submit">Submit</button>
     </form>
    );
  }



export default Form;