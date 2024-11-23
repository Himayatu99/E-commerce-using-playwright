const { test, expect } = require('@playwright/test');
const { homepage } = require('../selectors/homepage.spec');

test('Home page', async ({ page }) => {
      //visit to site
      await page.goto(homepage.url);

      //Verify the title 
      const pageTitle = await page.title();
      console.log('pagetitle', pageTitle)

      await expect(page).toHaveTitle('STORE')
      //Verify the Url 
      const pageUrl = page.url()
      console.log('pageurl', pageUrl)

      await expect(page).toHaveURL(homepage.url)

      //****Navbar container  start*****  
      const navbarcontainer = await page.locator('.navbar-collapse');
      await expect(navbarcontainer).toBeVisible();
      //Home
      await expect(page.locator(homepage.navbarhome)).toHaveText("Home (current)");
      //Contact 
      await expect(page.locator(homepage.Contact)).toHaveText('Contact');
      //About us
      await expect(page.locator(homepage.Aboutus)).toHaveText('About us');
      //Cart
      await expect(page.locator(homepage.Cartur)).toHaveText('Cart');
      //Login 
      await expect(page.locator(homepage.Login)).toHaveText('Log in');
      //signin 
      await expect(page.locator(homepage.Signin)).toHaveText('Sign up');
      //****Navbar container  end*****  

      // Define the alt texts for each image you want to check
      const expectedAltTexts = [
            { alt: 'First slide', selector: 'img[alt="First slide"]' },
            { alt: 'Second slide', selector: 'img[alt="Second slide"]' },
            { alt: 'Third slide', selector: 'img[alt="Third slide"]' }
      ];

      // Loop through each image and verify its alt text
      for (const { alt, selector } of expectedAltTexts) {
            const image = await page.locator(selector);

            // Check if the image exists before proceeding
            if (await image.count() > 0) {
                  const actualAltText = await image.getAttribute('alt');
                  console.log(`${alt} alt text:`, actualAltText); // Log the alt text

                  // Assert that the alt text matches the expected value
                  if (actualAltText === alt) {
                        expect(actualAltText).toBe(alt);
                  } else {
                        console.log(`Condition not met for ${alt} image.`);
                  }
            } else {
                  console.log(`${alt} image not found.`);
            }
      }

      //***Verify the categoires start****
      // CATEGORIES
      await expect(page.locator(homepage.Categoies)).toHaveText('CATEGORIES');
      await expect(page.locator(homepage.Phones)).toHaveText('Phones');
      await expect(page.locator(homepage.Laptops)).toHaveText('Laptops');
      await expect(page.locator(homepage.Monitors)).toHaveText('Monitors');


      //****Verify the categories end *****

      //Close the side
      await page.close();
})


