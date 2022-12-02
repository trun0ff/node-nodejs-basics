import {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";
import {createGunzip} from "zlib";

const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url)),
        filePath = __dirname + '/files/fileToCompress.txt',
        archivePath = __dirname + '/files/archive.gz',
        readStream = fs.createReadStream(archivePath),
        writeStream = fs.createWriteStream(filePath)
    await readStream.pipe(createGunzip()).pipe(writeStream)
};

await decompress();