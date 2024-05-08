import React from "react";
import '../styles/userprofile.css'

function UserProfile(){
    //your logic
        return(
            <div id="userprofile">
                <div id="header">
                    <h1>Ari Gikaria</h1>
                </div>
                <div id="user">
                    <span id="icon">
                       <img src="https://images.pexels.com/photos/4279100/pexels-photo-4279100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </span>
                    <div>
                        <h2>Ari Gikaira</h2>
                        <p><br/><span class="material-symbols-outlined">nightlife</span></p>
                    </div>
                    
                </div>
            </div>

        )

}
export default UserProfile
