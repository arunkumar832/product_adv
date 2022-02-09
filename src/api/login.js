import { execFile } from "child_process";

export default function Login (req, res) {
    var python_file = "src/external_files/login.py";
    execFile("python", [python_file, req.body.user, req.body.password],
        (error, stdout, stderr) =>{
            if (error){
                res.send(`Process executed with an error: ${error}`)
            }
            if (stdout){
                res.send(stdout)
            }
            if (stderr){
                res.send(`Process executed with an stderr: ${stderr}`)
            }
        }
    );
  }