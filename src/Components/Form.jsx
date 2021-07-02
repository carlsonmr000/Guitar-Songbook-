import { useState, useEffect } from "react";
import axios from "axios";
//import baseURL config from services
import { baseURL, config } from "../services";
import { useHistory, useParams } from "react-router-dom";

function Form(props) {

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
