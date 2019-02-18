module.exports = {
    sayHello: function(){
        return 'Hello';
    },
    addNumbers: function(val1, val2){
        return val1 + val2;
    },
    sumOfArray: function(arr){
        return arr.reduce((acc, item) => acc + item, 0);
    }
}