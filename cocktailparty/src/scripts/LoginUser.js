// login a user
/**
 * steps involved :
 *      1. fetch all users.
 *      2. validate user info
 */

function LoginUser(url,user){
    try{
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            //validate
            data.map((data)=>{
                if(data.name == user.name && data.password == user.password){
                    //login code 
                    console.log('you are now logged in')
                } else if(data.name == user.name && data.password !=user.password){
                    //login code 
                    console.log('you have entered the wrong password')
                    return 'you have entered the wrong password'
                } else {
                    //login code 
                    console.log('user does not exist')
                    return 'user does not exist'
                }
            })
            
        })
    }
    catch{
        console.error('an error occured');
        
    }
}

LoginUser("http://localhost:3000/user",passuser)
LoginUser("http://localhost:3000/user",failuser)
export default LoginUser