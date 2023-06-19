import {run_pa11y} from './pa11y-webdriverio.js'
import {run_ibm} from './ibm-webdriverio.js'
import isUrl from 'is-url';
import { pathToFileURL } from 'url';
import { run_qualweb } from './qualweb-webdriverio.js';
import { run_lighthouse } from './lighthouse-webdriverio.js';
import fs from 'fs';
import path from 'path';

async function upload_testfile(browser){
    const html = await browser.getPageSource();
    fs.writeFile('tests/test.html', html, function(err, data){
        if (err) throw err;
    });
}

async function run_tools(){
    const url = "http://localhost:5000/";
    var pa11y_start = performance.now();
    const pa11y_result = await run_pa11y(url);
    var pa11y_stop = performance.now();

    var ibm_start = performance.now();
    const ibm_result = await run_ibm(url);
    var ibm_stop = performance.now();

    var qualweb_start = performance.now();
    const qualweb_result = await run_qualweb(url);
    var qualweb_stop = performance.now();

    var lighthouse_start = performance.now();
    const lighthouse_result = await run_lighthouse(url);
    var lighthouse_stop = performance.now();


    const accesstools = [{"index": 0, "name": "pa11y", "result": pa11y_result, "time": parseInt(pa11y_stop - pa11y_start)},
    {"index": 1, "name": "ibm", "result": ibm_result, "time": parseInt(ibm_stop - ibm_start)},
    {"index": 2, "name": "qualweb", "result": qualweb_result, "time": parseInt(qualweb_stop - qualweb_start)},
    {"index": 3, "name": "lighthouse", "result": lighthouse_result, "time": parseInt(lighthouse_stop - lighthouse_start)}]

    return accesstools;
}

export async function run_tests(url, browser){
    console.log("ordinary-test")
    if(isUrl(url)){
        
        await browser.url(url)
        await upload_testfile(browser)
        return await run_tools();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function login_user(url, browser, username, password){
    console.log("user-test")
    
    if(isUrl(url)){
        await browser.url(url);
        if(url.includes("teamstest.haldor.se")){
            console.log("Loggar in på teamstest")
            let button = await browser.$$('[class="c--button secondary"]')[0]
            await button.waitForExist()
            await button.click()

            let field = await browser.$('#i0116')
            await field.waitForExist()
            await field.setValue(username)

            let passfield = await browser.$('#i0118')
            await passfield.setValue(password)

            let next = await browser.$('#idSIButton9')
            await next.click()

            let error = await browser.$('#usernameError')
            if(await error.isExisting()){
                return "Användarnamn gav fel"
            }

            let login = await browser.$('input[value="Logga in"]')
            await login.click()

            error = await browser.$('#passwordError')
            if(await error.isExisting()){
                return "Konto eller lösenord är fel"
            }

            let no = await browser.$('#idBtn_Back')
            await no.click()

        }else if(url.includes("vh-test.haldor.se")){
            console.log("Loggar in på vh-app")
            let button = await browser.$('button[class="c--button secondary"]')
            await button.waitForExist()
            await button.click()

            let userfield = await browser.$('#Username') 
            await userfield.waitForExist()
            await userfield.setValue(username)
            
            let passfield = await browser.$('#Password')
            await passfield.setValue(password)

            let error = await browser.$('#Username-error')
            if(await error.isExisting()){
                return "Användarnamnsfel"
            }

            error = await browser.$('#Password-error')
            if(await error.isExisting()){
                return "Lösenordsfel"
            }

            let login = await browser.$('button[value="login"]')
            await login.click()

            error = await browser.$('div[class="alert alert-danger"]')
            if(await error.isExisting()){
                return "Inloggningsfel"
            }
        }else{
            return "Adress är ogiltig";
        }
        await sleep(5000)
        await browser.url(url)
        let footer = await browser.$('.footer-content')
        await footer.scrollIntoView()
        await sleep(3000)

        await upload_testfile(browser)

        return await run_tools()
    }
    return "Okänd anledning";
}