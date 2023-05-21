import pa11y from 'pa11y';
/*
let browser = await remote({capabilities: { browserName: 'chrome' }})
browser.url('https://studenter.miun.se/~sagr1908/DT100G/projekt/login.php')
let test = run_pa11y(await browser.getUrl());*/
/*
browser.navigateTo('http://studenter.miun.se/~sagr/DT155G/');
run_pa11y(await browser.getUrl());*/

export async function run_pa11y(url){
    const WCAG = Array('WCAG2AAA');

    let res = Array();
    for await (const result of WCAG.map(
        sc => pa11y(url, {
            runners : [
                'axe',
                'htmlcs'
            ],
            standard : sc
        }) 
    )){
        res.push(result);
    }

    return res;
}