export const serviceCreateByPromise=(email,accessToken)=>{
    return fetch(`http://localhost:3000/service?email=${email}`,{
        headers:{
            authorization:`Bearer ${accessToken}`
        }
    })
    .then(res=>res.json())
}