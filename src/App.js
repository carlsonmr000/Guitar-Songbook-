import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Song from "./Components/Song";
import Home from "./Components/Home";
import Show from "./Components/Show";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import React from "react";
import "./App.css";

function App() {
  const [song, setSong] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
 
  useEffect(() => {
    const getSong = async () => {
      const resp = await axios.get(baseURL, config);

      setSong(resp.data.records);
    };
    getSong();
  }, [toggleFetch]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Link to="/"><h1 id="title">Guitar Songbook</h1></Link>
       
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/">
          <main id="song-container">
            {song.map((song) => (
              <Song key={song.id} song={song} setToggleFetch={setToggleFetch} />
            ))}
            <Link id="plus-sign" to="/form">
              Add new song
            </Link>
          </main>
        </Route>

        <Route exact path="/form">
          <Form setToggleFetch={setToggleFetch} />
        </Route>

        <Route exact path="/edit/:id">
          <Form song={song} setToggleFetch={setToggleFetch} />
        </Route>

        <Route exact path="/">
          <main>
            {song.map((song) => (
              <Link key={song.id} to={`/home/${song.songName}`}></Link>
            ))}
          </main>
        </Route>

        <Route path="/show/:id">
          <Show song={song} setToggleFetch={setToggleFetch} />
          <Link to={`/show/${song.songName}`}></Link>
        </Route>

        <Route>
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
