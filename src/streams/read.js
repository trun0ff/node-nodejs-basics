import fs from "fs";
import {dirname} from "path";
import {fileURLToPath} from "url";

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = __dirname + '/files/fileToRead.txt'
    const readableStream = fs.createReadStream(filePath, 'utf-8');

    readableStream.on('error', function (error) {
        throw new Error(`Operation failed: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk + '\n');
    })
};

await read();