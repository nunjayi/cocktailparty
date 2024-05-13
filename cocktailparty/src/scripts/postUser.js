// post a user to a database
/**
 * user details-
 *  name
 *  password 
 *  date-created
 *  wishlist
 *  view_history
 *  
 */
function signUp(user,url){
    fetch(url,{
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    })
}

export default signUp