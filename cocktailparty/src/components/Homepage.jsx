import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import '../styles/homepage.css'



function Homepage(){


 return(
    <div className="homepage" >
      <NavBar  />
      <div className="main">
        <div></div>
        <div className="image"><img src="https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" /></div>
        <div>
          <h1>Sip and Savor: Your Event, Your Drinks.</h1>
          <h2>Customized Cocktails for Memorable Occasions.</h2>
          
        </div>
        <div></div>
      </div>
      <div className="footer">
      </div>

    </div>
 )
}
export default Homepage