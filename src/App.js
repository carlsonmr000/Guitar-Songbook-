import {
  BrowserRouter as Router,
  Route, } from "react-router-dom";
  import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Song from "./Components/Song";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Footer from "./Components/Footer"; 
import React from "react";
import './App.css';


function App() {


  const [song, setSong] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

      useEffect(() => {

        const getSong = async () => {

        

              const resp = await axios.get(baseURL, config);

              setSong(resp.data.records);


        }
        getSong();

      }, []);


  return (

    <Router>
     <div className="App">
       
       <Nav />
       {/* <input type="text" placeholder="search a song"></input>
        <button>Submit</button> */}
       <h1>Guitar Songbook</h1>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/">
        <main>
          {song.map((song ) => (
            <Song key={song.id} song={song} setToggleFetch={setToggleFetch} /> 
          ))}
        </main>
      </Route>

        {/* <Route path="/home/:song">
        <Show birdsList={birdsList} setToggleFetch={setToggleFetch} />
      </Route> */}

    <h2>Add new song</h2>
    <Link id="song-form" to="/form">+</Link>


        <Route exact path="/new">
          <Form setToggleFetch={setToggleFetch}/>
        </Route>

        <Route exact path="/song/:id">
          <Form song={song} setToggleFetch={setToggleFetch}/>
        </Route>


       

      <Route>
        <Footer />  
      </Route>
  
    </div>

    </Router>
  
  );
}

export default App;
