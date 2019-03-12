const pup = require("puppeteer");
(async () => {
    const browser=await pup.launch({headless: false});
    const page=await browser.newPage();  
    const username="avayalive1"; 
    const password="avayalive#1"
    await page.goto('https://producthunt.com', { "waitUntil": "networkidle0" });
    await page.click("#app > div > div.header_0a28e > div > div.actions_6de17 > div > a.button_30e5c.mediumSize_c215f.simpleVariant_8a863.button_21eed");
    
    await page.click("#app > div > div.overlay_89106 > div > div > div > div > a.button_30e5c.mediumSize_c215f.googleSolidColor_fc6ef.solidVariant_0ef4d");
    await page.waitForSelector("#identifierNext");
    await page.type("#identifierId",username);
    await page.click("#identifierNext");
    await page.waitFor(2000);
    await page.type("#password",password);
  await page.click("#passwordNext");
   await page.waitFor(5000);
    // await browser.close(); 
  })()
  