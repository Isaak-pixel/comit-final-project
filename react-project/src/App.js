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
    //Creating Routes to use paths for linking the different pages of the site. 
    <Router>
      <header>
      {/*The header that will appear at the top of all pages, 
      it has 2 colours.*/}
        <h1><span className="heading">Pretty</span> <span className="heading">Popular </span>
        <span className="heading">Pizza</span> <span className="heading">Place</span></h1>
      </header>

      <div>
        <Switch>
          {/*Creating the home/index page*/}
          <Route exact path="/">
            <Home />  
          </Route>

          {/*Creating Menu page*/}
          <Route path="/menu">
            <Menu />
          </Route>

          {/*Creating About page*/}
          <Route path="/about">
            <About />
          </Route>

          {/*Creating Contact page*/}
          <Route path="/contact">
            <Contact />
          </Route>

          {/*Creating an 'if else' (or at least similar to it) to give user a error page
          if they entered a url other than the ones above*/}
          <Route path="/*">
            <Error404 />
          </Route>
        </Switch>
      </div>

      {/*This footer will appear on all pages*/}
      <footer>&copy;Isaak Dyck. Code made for the ComIT React course!</footer>
    </Router>
  );
}

// You can think of these components as "pages" in your app.


//Code for the 'Home'/index page and what will appear on it. The main form will also appear here
function Home() {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>&nbsp;|&nbsp;<Link to="/menu">Menu</Link>&nbsp;|&nbsp;
        <Link to="/about">About</Link>&nbsp;|&nbsp;<Link to="/contact">Contact</Link> 
      </nav>

      <h2 className="pageTitle"><span className="firstLetter">W</span>elcome to Pretty Popular Pizza Place!</h2>

      <h3 className="formTitle"><span className="firstLetter">W</span>ant to order a pizza? Take a look at our
      menu and give us a call! Or fill out the form below and we will send you an email to confirm your order.</h3>

      <form>
        <p id="fNameID"><label for="fName">First Name:</label> <input type="text" name="fNameID" id="fNameID" placeholder="First Name" /></p>
        <p id="lNameID"><label for="lName">Last Name:</label> <input type="text" name="lNameID" id="lNameID" placeholder="Last Name" /></p>
        <p id="addressID"><label for="addressID">Address:</label> <input type="text" name="addressID" id="addressID" placeholder="Address" /></p>
        <p id="phoneID"><label for="phoneID">Phone:</label> <input type="text" name="phoneID" id="phoneID" placeholder="Phone" maxLength="10"/></p>
        <p id="emailID"><label for="emailID">Email:</label> <input type="text" name="emailID" id="emailID" placeholder="Email" /></p>
      </form>
    </div>
  );
}



//Code for the 'Menu' page and what will appear on it
function Menu() {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>&nbsp;|&nbsp;<Link to="/menu">Menu</Link>&nbsp;|&nbsp;
        <Link to="/about">About</Link>&nbsp;|&nbsp;<Link to="/contact">Contact</Link>
      </nav>

      <h2 className="pageTitle"><span className="firstLetter">M</span>enu</h2>

      <h3 className="menuDesc"><span className="firstLetter">N</span>ote: All Pizzas come with
      our made from scratch tomato sauce and mozzerella cheese.</h3>

      {/*List for size options*/}
      <h3 className="menuTitle"><span className="firstLetter">S</span>ize</h3>
      <p className="menuDesc"><span className="firstLetter">W</span>e have a variety of pizzas sizes, from feeding 1 person to feeding a who group!</p>
      <ul>
        <li>Small - 9" ..... ($7.00)</li>
        <li>Medium - 12" ..... ($9.00)</li>
        <li>Large - 15" ..... ($11.00)</li>
        <li>Extra Large - 18" ..... ($13.00)</li>
      </ul>

      {/*List for dough options*/}
      <h3 className="menuTitle"><span className="firstLetter">D</span>ough Types</h3>
      <p className="menuDesc"><span className="firstLetter">O</span>ur dough is made right here, hot and fresh, just for you!</p>
      <ul>
        <li>Original</li>
        <li>Whole Wheat</li>
        <li>Rye</li>
        <li>Gluten Free ..... (Add $1.00)</li>
      </ul>

      {/* The looooong lsit of toppings */}
      <h3 className="menuTitle"><span className="firstLetter">T</span>oppings</h3>
      <p className="menuDesc"><span className="firstLetter">H</span>eaps of tasty toppings to choose from to customize your
      perfect dream pizza! All toppings are an extra $0.50 each.</p>

      <ul className="toppings">
        <li>Pepperoni</li>
        <li>Extra Mozzerella Cheese</li>
        <li>Cheddar Cheese</li>
        <li>Feta Cheese</li>
        <li>Onions</li>
        <li>Sausage</li>
        <li>Ground Beef</li>
        <li>Bacon</li>
        <li>Peppers</li>
        <li>Mushrooms</li>
        <li>Olives</li>
        <li>Pineapple</li>
        <li>Ham</li>
        <li>Chicken</li>
        <li>Basil</li>
        <li>Kale</li>
        <li>Anchovies</li>
        <li>Tomatoes</li>
      </ul>
    </div>
  );
}

//Code for the 'About' page and what will appear on it
function About() {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>&nbsp;|&nbsp;<Link to="/menu">Menu</Link>&nbsp;|&nbsp;
        <Link to="/about">About</Link>&nbsp;|&nbsp;<Link to="/contact">Contact</Link> 
      </nav>

      <h2 className="pageTitle"><span className="firstLetter">A</span>bout</h2>
    </div>
  );
}

//Code for the 'Contact' page and what will appear on it
function Contact() {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>&nbsp;|&nbsp;<Link to="/menu">Menu</Link>&nbsp;|&nbsp;
        <Link to="/about">About</Link>&nbsp;|&nbsp;<Link to="/contact">Contact</Link> 
      </nav>

      <h2 className="pageTitle"><span className="firstLetter">C</span>ontact Us</h2>
    </div>
  );
}

//Code for an error page and what will appear on it. This appears if an invalid link is entered
function Error404() {
  return (
    <div className="errorDiv">
      <h2 className="error"> Oh no! - 404 Error</h2>
      <h3 className="error">File or directory not found or doesn't exist!</h3>
      <h3 className="error">Something seems to have gone wrong. <Link to="/" className="errorLink">Click here</Link> to
      return back to the main page!</h3>
    </div>
  )
}

