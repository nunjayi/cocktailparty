import React from "react";

function Form({status}){
    return(
        <div>
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