import {run_pa11y} from './pa11y-webdriverio.js'
import {run_ibm} from './ibm-webdriverio.js'
import isUrl from 'is-url';
import { pathToFileURL } from 'url';
import { run_qualweb } from './qualweb-webdriverio.js';
import { run_lighthouse } from './lighthouse-webdriverio.js';
import fs from 'fs';
import path from 'path';

export async function run_tests(url, browser){
    if(isUrl(url)){
        await browser.url(url);
        const html = await browser.getPageSource();
        fs.writeFile('tests/test.html', html, function(err, data){
            if (err) throw err;
        });
        //url = pathToFileURL('tests/test.html').href;
        url = "http://localhost:5000/";
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
}