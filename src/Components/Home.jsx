import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
  


function Home() {

const [song, setSong] = useState([]);
 

      useEffect(() => {
 
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