var apiCall= ()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
}


async function main(){
    
   const response = await apiCall()
   const data = await response.json()
   console.log(data)

}
main()