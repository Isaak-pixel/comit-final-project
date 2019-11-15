import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div className="header">
      <h2>Home</h2>
      <Link to="/">Home</Link>&nbsp;|&nbsp;<Link to="/about">About</Link>&nbsp;|&nbsp;<Link to="/contact">Contact</Link> 

    </div>
  );
}

function About() {
  return (
    <div className="header">
      <h2>About</h2>
      <Link to="/">Home</Link>&nbsp;|&nbsp;<Link to="/about">About</Link>&nbsp;|&nbsp;<Link to="/contact">Contact</Link> 

    </div>
  );
}

function Contact() {
  return (
    <div className="header">
      <h2>Contact Us</h2>
      <Link to="/">Home</Link>&nbsp;|&nbsp;<Link to="/about">About</Link>&nbsp;|&nbsp;<Link to="/contact">Contact</Link> 

    </div>
  );
}

