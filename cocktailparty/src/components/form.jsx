import React from "react";
import '../styles/form.css'

function Form({status}){
    return(
        <div id="form">
            <form action="submti">
                <label htmlFor="name">username</label><br />
                <input type="text" /><br />
                <label htmlFor="password">password</label><br />
                <input type="password"/><br />
                <button>{status}</button>
            </form>
        </div>
    )
}
export default Form