//import { remote } from 'webdriverio';
import { QualWeb } from '@qualweb/core';
/*
let browser = await remote({capabilities: { browserName: 'chrome' }})
browser.url('http://studenter.miun.se/~anen1805/DT155G/CV/')
run_qualweb(await browser.getUrl());
*/
export async function run_qualweb(url){
    const qualweb = new QualWeb();
    const qualwebOptions = {
        url : url
    };

    let res = Array();
    await qualweb.start();
    const reports = await qualweb.evaluate(qualwebOptions);
    await qualweb.stop();
    Object.entries(reports[url].modules['act-rules'].assertions).map(entry => {
        if(entry[1].metadata.warning > 0 || entry[1].metadata.failed){
            res.push(entry[1]);
        }
    });

    Object.entries(reports[url].modules['wcag-techniques'].assertions).map(entry => {
        if(entry[1].metadata.warning > 0 || entry[1].metadata.failed){
            res.push(entry[1]);
        }
    });
    return res;
}