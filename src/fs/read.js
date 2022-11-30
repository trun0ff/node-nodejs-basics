import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from "fs";
import * as path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const fileToRead = path.resolve(__dirname, 'files/fileToRead.txt');

    fs.readFile(fileToRead, 'utf8')
        .then((res) => {
            console.log(res)
        })
        .catch(() => {
            throw new Error('FS operation failed')
        })
};

await read();