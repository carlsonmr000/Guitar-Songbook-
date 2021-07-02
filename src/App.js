import {
  BrowserRouter as Router,
  Route, } from "react-router-dom";
import Nav from "./Components/Nav";
import Song from "./Components/Song";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Footer from "./Components/Footer"; 
import React from "react";
import './App.css';


function App() {
  return (
    <Router>
    <div>
       
       <Nav />

        <Route exact path="/">
          <Home />
        </Route>

        {/* <Route path="/home/:song">
        <Show birdsList={birdsList} setToggleFetch={setToggleFetch} />
      </Route> */}

        <Route exact path="/form">
          <Form />
        </Route>

        <Route exact path="/song/:id">
          <Song />
        </Route>

      <footer>
        <Footer />
      </footer>
  
    </div>
  </Router>
  );
}

export default App;
