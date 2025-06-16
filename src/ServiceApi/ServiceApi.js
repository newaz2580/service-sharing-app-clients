export const serviceCreateByPromise=()=>{
    return fetch(`http://localhost:3000/my-service`,{
        credentials: 'include',
    })
    .then(res=>res.json())
}