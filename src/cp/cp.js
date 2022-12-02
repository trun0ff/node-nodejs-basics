import child_process from "child_process"
import {dirname} from "path";
import {fileURLToPath} from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
        child_process.fork(
            path.resolve(__dirname, 'files/script.js'),
            args,
            { stdio: 'inherit' }
        )
};

spawnChildProcess(process.argv.slice(2));