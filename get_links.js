const puppeteer = require('puppeteer');
const util = require('util');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    const route = 'http://localhost:3000'; /* Change as needed */
    await page.goto(route);
    const links = await page.evaluate(() => {
      let anchorList = [];
      let selected = document.querySelectorAll('a');
      for (let i=0; i < selected.length; i++) {
        anchorList.push(selected.item(i).href);
      }
      return anchorList;
    });
    util.inspect.defaultOptions.maxArrayLength = null;
    console.log(links);
  } catch(e) { console.log(e) }
  await browser.close();
})();
