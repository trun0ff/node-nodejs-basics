import {parentPort} from "worker_threads"

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (msg) => {
    // console.log(`finish worker with ${msg}`)
    parentPort.postMessage(msg)
};

parentPort.on('message', msg => {
    try{
        sendResult(nthFibonacci(parseInt(msg)));
    } catch (e) {
        throw new Error('Error from worker')
    }

});