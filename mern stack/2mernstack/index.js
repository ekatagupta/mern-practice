const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) =>
{
    if (req.url === "/favicon.ico")
        return res.end();
    const log = `${Date.now()}:${req.url} ${req.method} New Req Received\n`;

    const myUrl = url.parse(req.url, true); //TRUE Means querySelector

    console.log(myUrl);

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error appending to log file:", err);
        }
    });
});