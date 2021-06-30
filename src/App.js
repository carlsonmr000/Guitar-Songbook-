import {
  BrowserRouter as Router,
  Route, } from "react-router-dom";
import Nav from "./Components/Nav";
import Song from "./Components/Song";
import Home from "./Components/Home";
import Form from "./Components/Form";
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

         

        <Route exact path="/form">
          <Form />
        </Route>

        <Route exact path="/song/:id">
          <Song />
        </Route>

  
    </div>
  </Router>
  );
}

export default App;
