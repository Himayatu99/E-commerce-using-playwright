const { test, expect } = require('@playwright/test');
const { contactpage } = require('../selectors/contact.spec');
const { uptime } = require('process');

test('Contact', async ({ page }) => {

      await page.goto(contactpage.url)
      //Contact 
      await expect(page.locator(contactpage.Contact)).toHaveText('Contact');

      const contact = await page.locator(contactpage.Contact)
      await contact.click();

      //verify pop-up
      // close pop-up
      const closeX = page.locator('.modal-header>button').first();
      await closeX.click()

      const contactagain = await page.locator(contactpage.Contact)
      await contactagain.click()
      //New message 
      const newmessagetext = await page.locator('#exampleModalLabel');
      await expect(newmessagetext).toHaveText('New message');





})