import { stdin as input, stdout as output } from "process"
import { Transform } from "stream"

const transform = async () => {

    const textRevertStream = new Transform({
        transform(chunk, encoding, callback) {
            const resultString = chunk.toString().split("").reverse().join("").trim()
            this.push(resultString)
            this.push('\n')
            callback();
        },
    });

    input.pipe(textRevertStream).pipe(output);
};

await transform();