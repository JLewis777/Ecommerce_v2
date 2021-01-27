import React, { Component } from "react";
import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import "./Contact.css";
import contactPic from "./realcontact.jpg";

// import Aux from "../../hoc/Aux";
// import { Route, BrowserRouter as Router, Link } from "react-router-dom";

class Contact extends Component {
  // constructor() {
  //   super();
  //   this.validateForm = this.validateForm.bind(this);
  // }
  validateForm = (e) => {
    e.preventDefault();
    let x = document.forms["myForm"]["firstname"].value;
    let y = document.forms["myForm"]["lastname"].value;
    let z = document.forms["myForm"]["email"].value;
    let a = document.forms["myForm"]["phone"].value;
    let b = document.forms["myForm"]["subject"].value;
    if (x == "") {
      alert("You must enter your first name");
      return false;
    } else if (y == "") {
      alert("You must enter your last name");
      return false;
    } else if (z == "") {
      alert("You must enter your email");
      return false;
    } else if (a == "") {
      alert("You must enter a phone number");
      return false;
    } else if (b == "") {
      alert("You must enter a message");
      return false;
    }
  };

  render() {
    return (
      <div className="backdrop">
        <Navbar />
        <div className="contactbox">
          <div>
            <h2>Contact us!</h2>
            <p>
              For any questions regarding guitars, repairs, or retail
              availabilty. Send us a message!
            </p>
          </div>
          <div className="row">
            <div className="column2">
              <img src={contactPic} width="400" height="500" />
            </div>

            <div className="column1">
              <form
                noValidate
                name="myForm"
                action="/action_page.php"
                onSubmit={this.validateForm}
              >
                <label for="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your first name.."
                />
                <label for="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder=" Your last name.."
                />
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email.."
                />
                <label for="phone">Your phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
                <label for="country">Where are you from?</label>
                <select id="country" name="country">
                  <option value="usa">USA</option>
                  <option value="united kingdom">United Kingdom</option>
                  <option value="canada">Canada</option>
                </select>
                <label for="subject">Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Your message.."
                  // style="height:170px"
                ></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
