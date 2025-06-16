export const serviceCreateByPromise=()=>{
    return fetch(`https://service-sharing-server-steel.vercel.app/my-service`,{
        credentials: 'include',
    })
    .then(res=>res.json())
}