var myVar = 'global'
var myOutherVar = 'global'

function myFunction() {
    var  myVar = 'local';
    return myVar;
}

function myOutherFunction() {
    myOutherVar = 'local';
    return myOutherVar;
}

console.log(myVar);
console.log(myFunction())
console.log(myOutherVar);
console.log(myOutherFunction());