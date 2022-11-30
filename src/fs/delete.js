import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from "fs";
import * as path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    const deleteFilePath = path.resolve(__dirname, 'files/fileToRemove.txt')

    fs.unlink(deleteFilePath)
        .catch((e) => {
            throw new Error('FS operation failed')
        });
};

await remove();