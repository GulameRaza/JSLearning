const accountId = 14323
let accountName = "Faizal"
var accountEmail = "faizal@google.com"
accountCity = 'Mumbai'

//not allowed to update constant variables
// accountId = 2

accountName = "shaikh"
accountEmail = "test@yahoo.com"
accountCity = 'Palghar'
let accountState

console.log(accountId);

console.table([accountId,accountEmail,accountCity,accountName,accountState])

/*
prefer not to use var 
because of block and functional scope
*/