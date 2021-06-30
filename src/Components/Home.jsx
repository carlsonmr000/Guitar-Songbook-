import { useEffect, useState } from "react";
import axios from "axios";
import Song from "./Song";


function Home() {

const [song, setSong] = useState([]);

      useEffect(() => {

        const getSong = async () => {

            const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/song`;

            const config = {
                headers: {
                  Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
                }
              }

              const resp = await axios.get(baseURL, config);

              setSong(resp.data.records);


        }
        getSong();

      }, []);



    return (
        <div className="App">
        <h1> Guitar Songbook</h1>
         <main className="guitar-song">
            {song.map((song) => (
            <Song key={song._id} song={song} />
            ))}
        </main>
        <h2>Add new song</h2>
        <p>+</p>
      </div>
    );
  }
  
  export default Home;