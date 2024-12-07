const { test, expect } = require('@playwright/test');
const { aboutus } = require('../selectors/aboutus.spec');

test('About us', async ({ page }) => {
      //visit to site
      await page.goto('/');
      //About us
      await expect(page.locator(aboutus.Aboutus)).toHaveText('About us');

      const about = page.locator(aboutus.Aboutus);
      await about.click();

      //Verify the text 
      await expect(page.locator(aboutus.Aboutustext, { hasText: "About us" })).toHaveText('About us')

})