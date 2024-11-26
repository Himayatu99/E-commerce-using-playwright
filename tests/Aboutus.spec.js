const { test, expect } = require('@playwright/test');
const { aboutus } = require('../selectors/aboutus.spec');

test('About us', async ({ page }) => {
      //visit to site
      await page.goto(aboutus.url);
      //About us
      await expect(page.locator(aboutus.Aboutus)).toHaveText('About us');

      const about = page.locator(aboutus.Aboutus);
      await about.click();

      //Verify the text 
      await expect(page.locator(aboutus.Aboutustext, "About us"));

      //Verify Close btn 
      await expect(page.locator(aboutus.closeX, { hasText: 'Close' }));

      const closebtn = page.locator(aboutus.closeX);
      await closebtn.click();

})