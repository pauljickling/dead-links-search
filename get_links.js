const puppeteer = require('puppeteer');
const util = require('util');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    const port = 'http://localhost:3000'; /* Change as needed */
    console.log(`Searching for dead links at port ${port}...`);
    await page.goto(port);
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
