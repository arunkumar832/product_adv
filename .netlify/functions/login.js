// const {execFile} = require("child_process");
// const formattedReturn = require("./helpers/formattedReturn");
// const util = require('util');
const spawn = require("cross-spawn")

export async function handler(event, context) {
    var python_file = "src/external_files/login.py";
    // const { error, stdout, stderr } = await execFile(
    //     '/opt/buildhome/python3.8/bin/python',
    //     [python_file, JSON.parse(event.body).user, JSON.parse(event.body).password],
    //     {shell: true}
    //     );
    // if (stdout){
    //     return {
    //         statusCode: 200,
    //         body: stdout
    //     }
    // }
    // if (error) {
    //     return {
    //         statusCode: 500,
    //         body: `Process executed with an error: ${error}`
    //     }
    // }
    // if (stderr) {
    //     return {
    //         statusCode: 500,
    //         body: `Failed to Execute Python file: ${stderr}`
    //     }
    // }

    const command_exec = spawn("python3", [python_file, req.body.user, req.body.password], { stdio: 'inherit' });

    command_exec.stdout.on("data", (data) => {
        res.send(data);
    });

    command_exec.stderr.on("data", (data) => {
        res.send(`Stderr: ${data}`);
    });

    command_exec.on("error", (error) => {
        console.log(`Error : ${error}`);
        res.send(`Error: ${data}`);
    });

    command_exec.on("exit", (code, signal) => {
        if (code) {
            console.log(`Process Exit with code: ${code}`);
            res.send(`Process Exit with code: ${code}`);
        }
        if (signal) {
            console.log(`Process Exit with signal: ${signal}`);
            res.send(`Process Exit with signal: ${signal}`);
        }
    });
}
