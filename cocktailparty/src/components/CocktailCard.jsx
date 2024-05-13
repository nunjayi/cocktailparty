import React from "react";
import "../styles/cocktailcard.css";
import axios from "axios";
import { useState } from "react";
function CocktailCard({ name, ingredients, image }) {
  //current user
  const [user, setUser] =useState({
    "id": "123e",
    "name": "username",
    "password": "@24"
  })
  const [id,setID] = useState('')
  const [wish,addWish] = useState([])
  
 
  //current user that is logged in
  axios.get("http://localhost:3000/lastlog").then((res)=>{
   let last= res.data[(res.data.length-1)]
   setUser(last)})
  //findingthe id of the last user
  axios.get("http://localhost:3000/user").then((res)=>{
    let users = res.data
    users.map((usr)=>{
      if(usr.name == user.name && usr.password == user.password){
        setID(usr.id)
      }
    })
  })

  //add to wishlist
    function addToWishList(){
      try{
        //updating
        axios.get(`http://localhost:3000/user/${id}`).then(res=>addWish(res.data.wishlist))
        .then(console.log(wish))
        let newWish ={
          "name":name,
          "ingredients":ingredients,
          "image":image
        }
        const data = {
          wishlist: [newWish] // new array value
        };
        let allWishes = [...wish,newWish]
        addWish(allWishes)
        
        axios.get(`http://localhost:3000/user/${id}`, {
          method: 'PATCH',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          })
          .then(res=>console.log(res))
      }
    catch{
      //catch errors
      console.log('error occured')
    }}

   
 
  return (
    <div className="card">
      <div className="image-container">
        <img className="image" src={image} alt="Cocktail" />
      </div>
      <div className="content">
        <h1 className="title">{name}</h1>
        <div className="icons">
          <button onClick={addToWishList}>
            <h4>Add to wish list</h4>
            <span className="material-symbols-outlined">heart_plus</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CocktailCard;
