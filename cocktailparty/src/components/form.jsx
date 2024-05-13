import React, { useEffect, useState } from "react";
import '../styles/form.css'
import { NavLink } from "react-router-dom";



function Form(){
    const [users,setUsers] = useState([])
    const [name, setName] = useState('')
    const [password, setPassword] =useState('')
  
   
   
    //get user data
    let user = {
        name:name,
        password:password,
    }
        
        //validate user
         //fetch users
        

    useEffect(()=>{
        fetch("http://localhost:3000/user")
         .then(res=>res.json())
         .then(data=>setUsers(data))
         
    },[])
         
  function Logged(){
   try{
    users.map((usr)=>{
        if(usr.name == user.name && user.password == user.password){
            fetch("http://localhost:3000/lastlog",{
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(user)
            })
           
        }
     })
   }catch{
    console.log('failed to log user')

   }
   }

    return(
        <div>
            
            <form >
                <label htmlFor="username">username</label>
                <input type="text" placeholder="username" id="username" onChange={(e)=>{setName(e.target.value);}} />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password"  onChange={(e)=>{setPassword(e.target.value)}}  />
                <NavLink to="/homepage" className="navItem"   onClick={Logged}>
                    <button >login</button>
                </NavLink>
            </form>
        </div>
    )
}
export default Form

