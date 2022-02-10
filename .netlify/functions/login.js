const spawnSync = require('child_process').spawnSync;

exports.handler = async function (event, context) {
    const python_file = "src/external_files/login.py";
    const command_exec = spawnSync("pwd && which python", [], {
    // const command_exec = spawnSync("python3", [python_file, JSON.parse(event.body).user, JSON.parse(event.body).password], {
        stdio: "pipe",
        stderr: "pipe",
    })
    if (command_exec.status === 0 && command_exec.stdout != null){ 
        return {
            statusCode: 200,
            body: typeof(command_exec.stdout.toString()) === "string" ?
                command_exec.stdout.toString() :
                JSON.stringify(JSON.parse(command_exec.stdout.toString()))
        }
    }
    else{
        return {
            statusCode: 500,
            body: `Command Execution Failed from server: ${command_exec.error}` 
        }
    }
  }
