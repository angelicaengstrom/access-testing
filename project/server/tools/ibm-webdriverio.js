//import { remote } from 'webdriverio';
import aChecker from 'accessibility-checker';
/*
let browser = await remote({capabilities: { browserName: 'chrome' }})
browser.url('https://studenter.miun.se/~sagr1908/DT100G/projekt/login.php')
let test = run_ibm(await browser.getUrl());*/

export async function run_ibm(url){
    const testLabel = url;
    const aCheck = await aChecker.getCompliance(url, testLabel);
    return aCheck.report.results;
}