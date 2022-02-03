import { spawn } from "child_process";

export default function Login (req, res) {
    var python_file = "src/external_files/login.py";
    const command_exec = spawn("python3", [python_file, req.body.user, req.body.password]);

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