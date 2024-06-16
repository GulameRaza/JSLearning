
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
