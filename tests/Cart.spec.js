const { test, expect } = require('@playwright/test')
const { cart } = require('../selectors/cart.spec')

test('Cart page', async ({ page }) => {
      await page.goto(cart.url);
      //Cart
      await expect(page.locator(cart.Cartur)).toHaveText('Cart');

      await page.locator(cart.Cartur).click()

      //Verify the product 
      const titleproduct = await page.locator(cart.productstext, {
            hasText: "Products"
      })
      await expect(titleproduct).toHaveText('Products')

      //Verify the total
      const total = await page.locator(cart.productstext, {
            hasText: "Total"
      })
      await expect(total).toHaveText('Total')

      //Verify the placeorder button 
      const placeorderbtn = await page.locator(cart.Placeorder);
      await expect(page.locator(cart.Placeorder)).toHaveText('Place Order')

      // The background color of the button
      const backgroundColor = await placeorderbtn.evaluate((el) => {
            return window.getComputedStyle(el).backgroundColor;
      });

      // Verify the background color
      expect(backgroundColor).toBe('rgb(92, 184, 92)');

})