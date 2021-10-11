"use strict";

var promise = new Promise(function (fulfilled, rejected) {
  setTimeout(() => fulfilled("FULFILLED!"), 300);
});

// Your solution here
promise.then(console.log);
