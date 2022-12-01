import { promises as fs } from "fs";
import crypto from "crypto";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const filePath = __dirname + '/files/fileToCalculateHashFor.txt'
    fs.readFile(filePath, 'utf8')
        .then((res) => {
            const hashSum = crypto.createHash('sha256')
            hashSum.update(res)
            return hashSum.digest('hex')
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.error(err.message)
        })
};

await calculateHash();