import { promises as fs } from "fs";
import * as path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathExists = async path => !!(await fs.stat(path).catch(e => false));

const copy = async () => {
    const sourcePath = path.resolve(__dirname, 'files'),
        destinationPath = path.resolve(__dirname, 'files_copy'),
        sourceExist = await pathExists(sourcePath),
        destinationExists = await pathExists(destinationPath)


    if(!sourceExist) {
        throw new Error('FS operation failed. Source doesn\'t exist')
    }
    if(destinationExists) {
        throw new Error('FS operation failed. Destination folder already exists')
    }

    fs.mkdir(destinationPath)
        .then(() => {
            fs.readdir(sourcePath)
                .then((res) => {
                    res.forEach((file) => {
                        fs.copyFile(path.join(sourcePath, file), path.join(destinationPath, file));
                    });
                })
        })
        .catch((error) => {
            throw new Error(error);
        })
};

copy();