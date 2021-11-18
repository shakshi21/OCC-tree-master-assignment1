// Assignment 3:
// Create a module to provide complete calculator functionality such as
// addition, substraction, division, multiplication using custom node module.
// Hint create calcualtor.js and export above functionality


module.exports = {
    add: function (a, b){
        return a + b
    },
    sub: function(a,b){
        return a - b
    },
    mul: function(a,b){
        return a * b
    },
    div: function(a,b){
        return a / b
    }
}