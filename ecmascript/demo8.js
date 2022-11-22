const myFunc = function(){
 this.date = new Date()
 var self = this
 setTimeout(function(){
    console.log(self.date)
 },1000)
}
myFunc()