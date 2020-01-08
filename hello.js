const performance = require('perf_hooks').performance;

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <=n; i++) {
        total += i;
    }
    return total;
}

function addUpToNoLoop(n) {
    return n * (n+1)/2;
}

let t1 = performance.now()
console.log(addUpToNoLoop(100));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1)/1000} seconds without for loop`)

t1 = performance.now()
console.log(addUpTo(100));
t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1)/1000} seconds WITH for loop`)