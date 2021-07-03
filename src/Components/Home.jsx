import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Song from "./Song";
import { Link } from "react-router-dom";



function Home() {

const [song, setSong] = useState([]);
 

      useEffect(() => {
        console.log('HOME USE EFFECTHAPPENING!!')
        //window.location.reload()

        const getSong = async () => {

        

              const resp = await axios.get(baseURL, config);

              setSong(resp.data.records);


        }
        getSong();

      }, []);


    return (
        <div className="App">
        

        

       
      </div>
    );
  }
  
  export default Home;