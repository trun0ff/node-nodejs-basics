import {Worker} from "worker_threads"
import os from "os"
import {dirname} from "path";
import {fileURLToPath} from "url";

const cpuCoresCount = os.cpus().length,
    __dirname = dirname(fileURLToPath(import.meta.url)),
    workerFilePath = __dirname + '/worker.js',
    startValue = 10

const createWorkerPromise = (counter) => {
    return new Promise((resolve, reject) => {
        let w =  new Worker(workerFilePath)
        w.on('message', (msg) => {
            return resolve(msg)
        })
        w.on('error', (err) => {
            return reject(err)
        })
        w.postMessage(startValue + counter)
    });
}

const performCalculations = async () => {
    let workerPromises = [],
        counter = 0,
        workersResults = []

    while(counter < cpuCoresCount) {
        workerPromises.push(createWorkerPromise(counter))
        counter++
    }

    Promise.allSettled(workerPromises)
        .then((results) => {
            results.forEach((result) => {
                workersResults.push({
                    status: (result.status === 'fulfilled' ? 'resolved' : 'error'),
                    data: (result.status === 'fulfilled' ? result.value : null),
                })
            })
            console.log(workersResults)
        })
        .catch(function(err) {
            console.error(err.message);
        });
};

await performCalculations();