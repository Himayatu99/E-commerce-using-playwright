const { test, expect } = require('@playwright/test');
const { contactpage } = require('../selectors/contact.spec');

test('Contact', async ({ page }) => {

      await page.goto(contactpage.url)
      //Contact 
      await expect(page.locator(contactpage.Contact)).toHaveText('Contact');

      const contact = await page.locator(contactpage.Contact)
      await contact.click();

      //verify pop-up
      // close pop-up
      const closeX = page.locator(contactpage.closex).first();
      await closeX.click()

      const contactagain = await page.locator(contactpage.Contact)
      await contactagain.click()
      //New message 
      const newmessagetext = await page.locator(contactpage.newmessagetext);
      await expect(newmessagetext).toHaveText('New message');

      // Contact Email:
      const contactemail = await page.locator(contactpage.Contactemaillable, {
            hasText: 'Contact Name:'
      })
      await expect(contactemail).toHaveText('Contact Name:')

      //Contact Email input 
      const contactemailinput = await page.locator(contactpage.contactemailinput)
      await contactemailinput.type('johndoe@test.com');

      // Contact Name:
      const contactname = await page.locator(contactpage.Contactemaillable, {
            hasText: 'Contact Name:'
      })
      await expect(contactname).toHaveText('Contact Name:')

      //Contact Name input 
      const contactnameinput = await page.locator(contactpage.contactnameinput)
      await contactnameinput.type('JohnDoe');

      // Message:
      const message = await page.locator(contactpage.messagetext)
      await expect(message).toHaveText('Message:')

      // Message input 
      const messageinput = await page.locator(contactpage.messagetextinput)
      await messageinput.type('This is testing site');

      //Send message 
      const sendmessagebtton = await page.locator(contactpage.sendmessagebtn, {
            hasText: 'Send message'
      });
      await sendmessagebtton.click();
      // Listen for the alert dialog
      page.on('dialog', async (dialog) => {
            // Verify the alert message
            expect(dialog.message()).toBe('Thanks for the message!!');

            // Accept the alert
            await dialog.accept();
      });




})