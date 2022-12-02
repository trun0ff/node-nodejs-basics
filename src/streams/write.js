import readline from "readline"
import { stdin as input, stdout as output } from "process";
import fs from "fs";
import {dirname} from "path";
import {fileURLToPath} from "url";

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url)),
        filePath = __dirname + '/files/fileToWrite.txt',
        rl = readline.createInterface({
            input,
            output,
            terminal: false
        }),
        writableStream = fs.createWriteStream(filePath);

    rl.on('line', (line) => {
        writableStream.write(line + '\n');
    });

    rl.once('close', () => {
        writableStream.end();
    });
};

await write();