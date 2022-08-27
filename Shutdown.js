// Call OS Module within Node.js to obtain hostname
var os = require('os');
var hostname = os.hostname();

// Designate Shell Environment, Establishes Command
var shell = "powershell.exe";
var command = "Stop-Computer -ComputerName " + hostname + " -Force";

// Spawn and execute a child process via PowerShell
var spawn = require("child_process").spawn,child;
child = spawn(shell, [command]);