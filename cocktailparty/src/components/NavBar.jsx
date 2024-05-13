import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'

let logo = "../assests/react.svg"
function NavBar() {
//fetch user specific data
const [users,setUsers] = useState([{
  "id": "123e",
  "name": "username",
  "password": "@24"
}])
let url = "http://localhost:3000/lastlog"
//fetchUserssetTimeout(() => resolve("done!"), 1000);
axios.get(url).then(res => {
  //setUsers(response.data)
 
  setUsers(res.data)
})


let index = users.length-1
let user = users[index]

let string = user.name;
let firstChar = string.charAt(0); // Returns "w"


  return (
    <>
    <div className="header">
      
      <div className="user">
            <span className="icon">{firstChar}</span>
            <h1>{user.name}</h1>
      </div>

      <nav className="nav-container">
        <div className="center-links">
            <NavLink to="/" className="navItem">
              <span className="material-symbols-outlined">home</span>
            </NavLink>
        </div>
        <div className="center-links">
          <NavLink to="/cocktails" className="navItem">
          <span><span className="material-symbols-outlined">local_bar</span><span className="material-symbols-outlined">restaurant_menu</span></span>
          </NavLink>
        </div>
        <div className="userprofile-container">
          <NavLink to="/shoppinglist" className="navItem">
            <span className="material-symbols-outlined shopping-cart-icon">shopping_cart</span>
          </NavLink>

        </div>
          

      </nav>
     
    </div>
    </>
  );
}

export default NavBar;
