fetch('https://reqres.in/api/users',
{
    method:'POST',
    headers:
    {
        'Content-Type' : 'application/json'
    },
    body:JSON.stringify({
        name:"User 1"
    })
})
.then(res => res.json())
// .then(res =>
//     {
//         if(res.ok)
//         {
//             console.log("SUCCESS");
//         }
//         else
//         {
//             console.log("FAILURE");
//         }
//     })
.then(data=>console.log(data)) 
// .catch(error => console.log("Error"))