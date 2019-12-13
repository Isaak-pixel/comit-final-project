import React from 'react';
import ReactDOM from 'react-dom';
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

  let [fName, fNameSet] = React.useState("");
  let [lName, lNameSet] = React.useState("");
  let [address, addressSet] = React.useState("");
  let [phone, phoneSet] = React.useState("");
  let [email, emailSet] = React.useState("");
  let [dough, doughSet] = React.useState("");
  let [size, sizeSet] = React.useState("");


  function handlefName(event) {
    fNameSet(event.currentTarget.value);
  }

  function handlelName(event) {
    lNameSet(event.currentTarget.value);
  }

  function handleAddress(event) {
    addressSet(event.currentTarget.value);
  }

  function handlePhone(event) {
    phoneSet(event.currentTarget.value);
  }

  function handleEmail(event) {
    emailSet(event.currentTarget.value);
  }

  function handleDough(event) {
    doughSet(event.currentTarget.value);
  }

  function handleSize(event) {
    sizeSet(event.currentTarget.value);
  }

  const gst = 0.05; //5% GST
  const pst = 0.06; //6% PST

  let subtotal = 0;
  let total = 0;

  let totalGst = (subtotal * gst);
  let totalPst = (subtotal * pst);

  let numOfToppings = (document.querySelectorAll('input[type="checkbox"]:checked').length);

  let phoneReg = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;

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
        <p id="fNameClass"><label for="fName">First Name:</label> 
        <input type="text" className="fNameID" id="fNameID" placeholder="First Name" onChange={handlefName} value={fName} />
        {fName.match(/[a-zA-Z]/) == null  && <strong><span className="errorMessage"> -- Error, invalid first name entered</span></strong>}</p>

        <p id="lNameClass"><label for="lName">Last Name:</label> 
        <input type="text" className="lNameID" id="lNameID" placeholder="Last Name" onChange={handlelName} value={lName} />
        {lName.match(/[a-zA-Z]/) == null && <strong><span className="errorMessage"> -- Error, invalid last name entered</span></strong>}</p>

        <p id="addressClass"><label for="addressID">Delivery Address:</label> 
        <input type="text" className="addressID" id="addressID" placeholder="Address" onChange={handleAddress} value={address} />
        {address == "" && <strong><span className="errorMessage"> -- Error, no address entered</span></strong>}</p>

        <p id="phoneClass"><label for="phoneID">Phone Number:</label> 
        <input type="text" className="phoneID" id="phoneID" placeholder="Phone" onChange={handlePhone} value={phone} />
        {phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/) == null && <strong><span className="errorMessage"> -- Error, invalid phone number</span></strong>}</p>

        <p id="emailClass"><label for="emailID">Email Address:</label> 
        <input type="text" className="emailID" id="emailID" placeholder="Email" onChange={handleEmail} value={email}/>
        {email.match(/\S+@\S+\.\S+/) == null && <strong><span className="errorMessage"> -- Error, invalid email</span></strong>}</p>

        <p id="sizeClass"><label for="pizzaSize"><span className="firstLetter">S</span>elect your pizza size</label></p>
        <p><input type="radio" name="pizzaSize" id="sizeS" /> Small (9") ...... $7.00</p>
        <p><input type="radio" name="pizzaSize" id="sizeM" /> Medium ("12") ...... $9.00</p>
        <p><input type="radio" name="pizzaSize" id="sizeL" /> Large (15") ...... $11.00</p>
        <p><input type="radio" name="pizzaSize" id="sizeXL" /> X-Large (18") ...... $13.00</p>

        <p id="doughClass"><label for="doughType"><span className="firstLetter">S</span>elect the type of dough you want</label></p>
        <p><input type="radio" name="doughType" id="dough1" /> Original</p>
        <p><input type="radio" name="doughType" id="dough2" /> Whole Wheat</p>
        <p><input type="radio" name="doughType" id="dough3" /> Rye</p>
        <p><input type="radio" name="doughType" id="dough4" /> Gluten Free</p>

        <div id="toppingClass">
          <label for="toppingsList"><span className="firstLetter">S</span>elect your toppings that you want ($0.50 each)</label>
          Pepperoni<input type="checkbox" name="topping1" id="topping1" />
          &nbsp;&nbsp;&nbsp; Extra Mozzerella Cheese<input type="checkbox" name="topping2" id="topping2" />
          &nbsp;&nbsp;&nbsp; Cheddar Cheese<input type="checkbox" name="topping3" id="topping3" />
          &nbsp;&nbsp;&nbsp; Feta Cheese<input type="checkbox" name="topping4" id="topping4" />
          &nbsp;&nbsp;&nbsp; Onions<input type="checkbox" name="topping5" id="topping5" />
          &nbsp;&nbsp;&nbsp; Sausages<input type="checkbox" name="topping6" id="topping6" />
          &nbsp;&nbsp;&nbsp; Ground Beef<input type="checkbox" name="topping7" id="topping7" />
          &nbsp;&nbsp;&nbsp; Bacon<input type="checkbox" name="topping8" id="topping8" />
          &nbsp;&nbsp;&nbsp; Peppers<input type="checkbox" name="topping9" id="topping9" />
          &nbsp;&nbsp;&nbsp; Mushrooms<input type="checkbox" name="topping10" id="topping10" />
          &nbsp;&nbsp;&nbsp; Olives<input type="checkbox" name="topping11" id="topping11" />
          &nbsp;&nbsp;&nbsp; Pineapples<input type="checkbox" name="topping12" id="topping12" />
          &nbsp;&nbsp;&nbsp; Ham<input type="checkbox" name="topping13" id="topping13" />
          &nbsp;&nbsp;&nbsp; Chicken<input type="checkbox" name="topping14" id="topping14" />
          &nbsp;&nbsp;&nbsp; Basil<input type="checkbox" name="topping15" id="topping15" />
          &nbsp;&nbsp;&nbsp; Kale<input type="checkbox" name="topping16" id="topping16" />
          &nbsp;&nbsp;&nbsp; Anchovies<input type="checkbox" name="topping17" id="topping17" />
          &nbsp;&nbsp;&nbsp; Tomatoes<input type="checkbox" name="topping18" id="topping18" />
        </div>

        <p><label>Subtotal: </label><input type="text" name="tSubtotal" id="tSubtotal" readOnly="true"/></p>
        <p><label>GST: </label><input type="text" name="tGST" id="tGST" readOnly="true"/></p>
        <p><label>PST: </label><input type="text" name="tPST" id="tPST" readOnly="true"/></p>
        <p><label>Grand Total: </label><input type="text" name="tTotal" id="tTtoal" readOnly="true"/></p>
      </form>
    </div>
  );
}



//Code for the 'Menu' page and what will appear on it. This has a list of the menu with prices. 
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
        <li>Gluten Free</li>
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

      <div className="contactInfo">
        <p><span className="symbol">&#9742;</span> - Phone: (306) 123-4567</p>
        <p><span className="symbol">&#9993;</span> - Email: pp-pizzaplace-questions@mail.com</p>
        <p><span className="symbol">&#127968;</span> - Address: 123 Fake St. Saskatoon, SK</p>
      </div>
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

