const products =null
// const products =[
//     {
//         id:1,
//         name:'Iphone14',
//         price:75455.5
//     },
//     {
//         id:4,
//         name:'Oneplus10pro',
//         price:5545.5
//     },

//     {
//         id:2,
//         name:'SamsungFlip',
//         price:6545.5
//     }
// ]

const filterByProduct = function(){
    return products.filter(p => p.price >=6000.00)
   }
var myFunc = function(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>  {
        if(products!=null){
        resolve(products.filter(p => p.price >= 6000.00))
        }
        else{
            reject(new Error('Products is null'))
        }
    },1000)
})
  //  clearTimeout(timer)
}
async function main(){
    try{
    const result = await myFunc()
    console.log(result)
    }catch(error){
        console.log(error)
    }

}
main()


console.log('outside timeout')