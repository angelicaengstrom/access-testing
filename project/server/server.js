import express from 'express'
import timeout from 'connect-timeout'
import bodyParser from 'body-parser'
import { remote } from 'webdriverio'
import { login_user, run_tests } from './tools/tests.js'
import path from 'path'

const app = express()
let browser = await remote({capabilities: { browserName: 'chrome' }});
var jsonParser = bodyParser.json()
let lock = false;

app.use(function(req, res, next){
    res.setTimeout(120000, function(){
        console.log('Request has timed out.');
            res.send(408);
        });

    next();
});


app.post("/api", jsonParser, async (req, res) => {
    if(lock){
        res.json({err: "server busy"})
        return
    }
    lock = true
    if(req.body.url !== 'undefined' && req.body.username !== 'undefined' & req.body.password !== 'undefined'){
        const url = req.body.url;
        const username = req.body.username;
        const password = req.body.password;
        await browser.reloadSession()
        
        login_user(url, browser, username, password).then(result => {
            if(Array.isArray(result)){
                res.json({"url": url, "username": username, "accesstools": result})
            }else{
                res.json({"url": url, "username": username, "error": result})
            }
            lock = false
        })
    }else{
        console.log('Request error')
        res.send(404)
    }
})

app.get("/api/:url", async (req, res) => {
    if(lock){
        res.json({err: "server busy"})
        return
    }
    lock = true
    await browser.reloadSession()
    run_tests(req.params.url, browser).then(result => {
        res.json({"url": req.params.url, "accesstools": result})
        lock = false
    })
})

app.get('/', function(req, res) {
    res.sendFile(path.resolve('tests/test.html'));
});

app.listen(5000, () => { console.log("Server started on port 5000") })