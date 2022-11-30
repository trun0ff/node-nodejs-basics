import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from "fs";
import * as path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
    const listFolder = path.resolve(__dirname, 'files')

    fs.readdir(listFolder)
        .then((res) => {
            res.forEach((file) => {
                console.log(file)
            });
        })
        .catch(() => {
            throw new Error('FS operation failed');
        })
};

await list();