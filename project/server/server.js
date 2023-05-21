import express from 'express'
import timeout from 'connect-timeout'
import { remote } from 'webdriverio'
import { run_tests } from './tools/tests.js'
import path from 'path'

const app = express()
let browser = await remote({capabilities: { browserName: 'chrome' }});

app.use(function(req, res, next){
    res.setTimeout(120000, function(){
        console.log('Request has timed out.');
            res.send(408);
        });

    next();
});


app.post("/api", (req, res) => {
    console.log(req.body)
})

app.get("/api/:url", (req, res) => {
    run_tests(req.params.url, browser).then(result => {
        res.json({"url": req.params.url, "accesstools": result})
    })
})

app.get('/', function(req, res) {
    res.sendFile(path.resolve('tests/test.html'));
});

app.get("/api/:url/:username/:password", (req, res) => {
    res.json({"url": req.params.url, "username": req.params.username})
})

app.listen(5000, () => { console.log("Server started on port 5000") })