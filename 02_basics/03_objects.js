//2 ways to declare object 1: literel and 2 constructor
//singleton
//constructer
// let Object.create

//Object Literals
const jsUser = {
    name : 'faizal',
    age  : 18,
    location : 'mumbai',
    isLoggedIn : 'false',
    lastLoggedInDays : ["monday", "tuesday"],
    // userGreeting : function(){
    //     console.log('Hello jsUser')
    // },
    userGreeting2 : function(){
        console.log(`Hello jsUser, ${this.name}`)
    },
    set : function(key,value){
        this[key] = value
    },
    get : function(){
        return jsUser
    }
}
// Object.freeze(jsUser) //will make uneditable
// console.log(jsUser.userGreeting())
// console.log(jsUser)
// jsUser.set('name','shaikh')
// console.log(jsUser.get())
// console.log(jsUser)
jsUser.userGreeting = function(){
    return 'Hello jsUser'
}
console.log(jsUser.userGreeting()) //if freeze earlier,jsUser.userGreeting is not a function  else it will work