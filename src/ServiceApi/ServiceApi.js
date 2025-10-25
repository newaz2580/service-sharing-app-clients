export const serviceCreateByPromise=()=>{
    return fetch(`https://service-sharing-app-server.onrender.com/my-service`,{
        credentials: 'include',
    })
    .then(res=>res.json())
}