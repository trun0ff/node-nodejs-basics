import {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";
import { createGzip } from "zlib";

const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url)),
        filePath = __dirname + '/files/fileToCompress.txt',
        archivePath = __dirname + '/files/archive.gz',
        readStream = fs.createReadStream(filePath, 'utf-8'),
        writeStream = fs.createWriteStream(archivePath)
    await readStream.pipe(createGzip()).pipe(writeStream)
};
try {
    await compress();
} catch (e) {
    console.error(e.message)
}
