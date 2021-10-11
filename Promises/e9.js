'use strict';

const input = process.argv[2];

const parsePromised = new Promise((fulfill, reject) => {
    try {
        fulfill(JSON.parse(input));
    } catch(error) {
        reject(error)
    }
})

const onReject = (error) => console.log(error.message);

parsePromised.then(console.log).catch(onReject);