
const products =[
    {
        id:1,
        name:'Iphone14',
        price:75455.5
    },
    {
        id:4,
        name:'Oneplus10pro',
        price:5545.5
    },

    {
        id:2,
        name:'SamsungFlip',
        price:6545.5
    }
]

const filterByProduct = function(){
    return products.filter(p => p.price >=6000.00)
   }
var myFunc = function(cb){
    setTimeout(()=>  cb(products.filter(p => p.price >= 6000.00)),1000)

  //  clearTimeout(timer)
}


myFunc(data=> console.log(data));
console.log('outside timeout')