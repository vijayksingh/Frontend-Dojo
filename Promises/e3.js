'use strict';

let promise = new Promise(function (fulfill, rejected) {
    setTimeout(() => {
        rejected(new Error("REJECTED!"))
    }, 300)
})

function onReject(error) {
    console.log(error.message);
}

promise.then(console.log, onReject);