import {promises as fs} from "fs";
import * as path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
    const filePath = path.resolve(__dirname, 'files/fresh.txt');

    fs.stat(filePath)
        .then(() => {
            throw new Error('FS operation failed')
        })
        .catch((err) => {
             if (err.code === 'ENOENT') {
                 fs.appendFile(filePath, 'I am fresh and young\r\n')
                     .catch((err) => {
                         throw new Error(err.message)
                     });
            } else {
                throw new Error('FS operation failed')
            }
        })
};

await create();