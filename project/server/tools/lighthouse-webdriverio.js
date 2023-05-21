import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

export async function run_lighthouse(url){
    const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
    const options = {logLevel: 'info', output: 'json', onlyCategories: ['accessibility'], port: chrome.port};
    const runnerResult = await lighthouse(url, options);
    const reportHtml = runnerResult.report;
    chrome.kill();
    let result = JSON.parse(reportHtml);
    return result.audits;
}