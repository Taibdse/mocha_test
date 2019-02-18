const assert = require('chai').assert;
const app = require('../app');
const arr = [1, 2, 3, 4, 5];

describe('App2', function(){

    describe('sumOfArray', function(){
        it('sumOfArray should return right value', function(){
            assert.equal(app.sumOfArray(arr), 15);
        })
    
        it('sumOfArray should return number', function(){
            assert.typeOf(app.sumOfArray(arr), 'number');
        })
    })
    
})