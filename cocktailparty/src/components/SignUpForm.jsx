import React, { useState } from "react";
import '../styles/signupform.css'
//import the signup function
import signUp from '../scripts/postUser'
import { NavLink } from "react-router-dom";


function SignUpForm() {
const [name, setName] = useState('')
const [password, setPassword] = useState('')
let userUrl = 'http://localhost:3000/user'
console.log(name)
console.log(password)
let newUser = {
  name:name,
  password:password,
  date:new Date(),
  wishlist:[]

}
//handle singup
function postUser(e){
 
  if(name == '' && password == ''){
    window.alert('enter a valid details')
  }else{
    signUp(newUser,userUrl)
  }
  
  setName('')
  setPassword('')
}

  return (
      <div className="signup">
        <form >
          <p>Welcome</p>
          <input type="username" placeholder="username" required onChange={(e)=>{setName(e.target.value)}}/>
          <input type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
          <NavLink to="/login" className="navItem"   onClick={postUser}>
              <button >Sign up</button>
          </NavLink>        
        </form>
      </div>
  );
}

export default SignUpForm;
