const attachTitle = (name) => `DR. ${name}`;

let promise = new Promise((fulfill, reject) => {
    fulfill("MANHATTAN");
})

promise.then(attachTitle).then(console.log);