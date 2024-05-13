

function getUser(id){
    try{
            fetch(`http://localhost:3000/user/${id}`)
            .then(res=>res.json())
            .then(data=>console.log(data))

    }catch{
        console.error('user not found')
    }
}
getUser('3aa2')