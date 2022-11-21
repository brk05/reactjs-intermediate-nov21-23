var apiCall= (cb)=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json()).then(data => cb(data))
}


    
   apiCall(data => console.log(data))
 

