import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from "fs";
import * as path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathExists = async path => !!(await fs.stat(path).catch(e => false));

const rename = async () => {
    const renameFrom = path.resolve(__dirname, 'files/wrongFilename.txt'),
        renameTo = path.resolve(__dirname, 'files/properFilename.md'),
        sourceFileExists = await pathExists(renameFrom),
        resultFileExists = await pathExists(renameTo)


    if (!sourceFileExists || resultFileExists) {
        throw new Error('FS operation failed.')
    }
    fs.rename(renameFrom, renameTo)
        .catch((error) => {
            throw new Error(error.message)
        });
};

await rename();