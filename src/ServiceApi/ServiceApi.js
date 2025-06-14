export const serviceCreateByPromise=()=>{
    return fetch(`http://localhost:3000/my-service`,{
        credentials:'include'
        // headers:{
        //     authorization:`Bearer ${accessToken}`
        // }
    })
    .then(res=>res.json())
}