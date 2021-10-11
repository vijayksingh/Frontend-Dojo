
    'use strict';
    
    var promise = new Promise(setTimeout(() => "FULFILLED", 300));
    var promise = new Promise(function (fulfilled) {
         setTimeout(() => "FULFILLED", 300)
    });
    
    // Your solution here
promise.then((val) => console.log(val));