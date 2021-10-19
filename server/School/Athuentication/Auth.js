const bcrypt = require('bcrypt')

// for hashing the password
// first argument is the password that come from the client 
// second argument is the salt round which means the cost factor 
//the cost factor controls how mush time needed to calculate a single bcry
exports.HashPass= (passwordFromClient,saltRound=10 )=>{
   //return the password hashed 
return bcrypt.hash(passwordFromClient,saltRound)
}

// this for compare the password if the password that come from client match the password stored in the data base 
exports.comparePass = (passwordFromClient , passwordHashed)=>{
   // return true if the password come from client match the password stored in the data base
   // else it return false  
   return  bcrypt.compare(passwordFromClient,passwordHashed)
}