const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){

    describe('sayHello', function(){
        it('App should return hello', function(){
            assert.equal(app.sayHello(), 'Hello');
        })
    
        it('Say hello should return type string', function(){
            assert.typeOf(app.sayHello(), 'string');
        })
    })
    
    describe('addNumbers', function(){
        it('addNumbers should be above 5', function(){
            assert.isAbove(app.addNumbers(5, 5), 5);
        })
    
        it('addNumbers should return a number', function(){
            assert.typeOf(app.addNumbers(5, 2), 'number');
        })
    })
    
})