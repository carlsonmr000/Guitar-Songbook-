import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Song from "./Song";
import { Link } from "react-router-dom";



function Home() {

const [song, setSong] = useState([]);
 

      useEffect(() => {

        const getSong = async () => {

        

              const resp = await axios.get(baseURL, config);

              setSong(resp.data.records);


        }
        getSong();

      });


    return (
        <div className="App">
        <h1> Guitar Songbook</h1>
        {/* <Link id="song" to="/song/:id"></Link> */
         <div className="guitar-song">
            {song.map((song) => (
            <Song key={song._id} song={song} />
            ))}
        </div> }
        <h2>Add new song</h2>
        <Link id="song-form" to="/form">+</Link>

        <input type="text" placeholder="search a song"></input>
        <button>Submit</button>
      </div>
    );
  }
  
  export default Home;