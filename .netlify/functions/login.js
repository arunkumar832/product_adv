// const {execFile} = require("child_process");
// const formattedReturn = require("./helpers/formattedReturn");
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

export async function handler(event, context) {
    var python_file = "src/external_files/login.py";
    const { error, stdout, stderr } = await execFile(
        'python3',
        [python_file, JSON.parse(event.body).user, JSON.parse(event.body).password],
        {shell: true}
        );
    if (stdout){
        return {
            statusCode: 200,
            body: stdout
        }
    }
    if (error) {
        return {
            statusCode: 500,
            body: `Process executed with an error: ${error}`
        }
    }
    if (stderr) {
        return {
            statusCode: 500,
            body: `Failed to Execute Python file: ${stderr}`
        }
    }
}
