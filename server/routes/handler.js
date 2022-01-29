const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");
const { urlencodedParser } = require("body-parser");

router.get('/details', (req, res) => {
    console.clear()
    console.log(`User: ${req.body.title}`)
    const dets = {
        "name": "Arun",
        "class": "10th",
        "subject": "English"
    };
    console.log("This is output from Nodejs: %s", JSON.stringify(dets))
    res.end(JSON.stringify(dets));
});

router.get("/command", (req, res)=>{
    const command_exec = spawn("ls", ["-lh"]);

    command_exec.stdout.on("data", (data) => {
        console.log(`Arun stdout: ${data}`);
        res.send(`Arun stdout: ${data}`);
    });

    command_exec.stderr.on("data", (data) => {
        console.log(`Arun stderr: ${data}`);
        res.send(`Arun stderr: ${data}`);
    });

    command_exec.on("error", (error) => {
        console.log(`Arun error : ${error}`);
        res.send(`Arun error: ${data}`);
    });

    command_exec.on("exit", (code, signal) => {
        if (code) {
            console.log(`Arun Process Exit with code: ${code}`);
            res.send(`Arun Process Exit with code: ${code}`);
        }
        if (signal) {
            console.log(`Arun Process Exit with signal: ${signal}`);
            res.send(`Arun Process Exit with signal: ${signal}`);
        }
    });
});

router.post("/save_args", (req, res) => {
    const command_exec = spawn("python3", ["./server/login.py", req.body.user, req.body.password]);

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
});

module.exports = router;