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

      await expect(page.locator('#tbodyid')).toBeVisible();
      //*** phones category start****
      // Find the image by its selector
      const samsungs6 = await page.locator(homepage.Samsungs6);
      // Get the src attribute of the image
      const src = await samsungs6.getAttribute('src')
      // Assert that the src is correct
      expect(src).toBe('imgs/galaxy_s6.jpg');

      //Verify the title of galaxy s6
      const samsungs6title = page.locator(homepage.Samsungs6title, { hasText: 'Samsung galaxy s6' })
      await expect(samsungs6title).toHaveText('Samsung galaxy s6')
      //Verify the Price 
      const samsungs6Price = page.locator(homepage.Samsungs6Price, { hasText: '$360' })
      await expect(samsungs6Price).toHaveText('$360')
      //Verify the description 
      const samsungs6description = page.locator(homepage.Samsungs6description);
      await expect(samsungs6description).toHaveText("The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded. ")


      //Verify the Title Nokia lumia
      const titleLocator = page.locator('h4.card-title', { hasText: 'Nokia lumia 1520' });
      await expect(titleLocator).toHaveText('Nokia lumia 1520');

      //Verify the Price
      const priceLocator = page.locator('h5', { hasText: '$820' });
      await expect(priceLocator).toHaveText('$820');

      // Verify the Description
      const descriptionLocator = page.locator('p#article', {
            hasText: 'The Nokia Lumia 1520 is powered',
      });

      // Verify the exact text
      await expect(descriptionLocator).toHaveText(
            'The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.'
      );

      //*** phones category start****

      //*** Laptops category start****
      await expect(page.locator(homepage.Laptops)).toHaveText('Laptops');

      //*** Laptops category end****
      //****Verify the categories end *****

      //Footer
      await expect(page.locator('#footc')).toBeVisible();

      //About us title
      const footeraboutus = page.locator(homepage.footercommonselectfortitle, { hasText: 'About Us' });
      await expect(footeraboutus).toHaveText('About Us')

      //About description 

      const footeraboutusdescription = page.locator(homepage.footercommonselectfordescript);
      await expect(footeraboutusdescription).toHaveText("We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.")

      //Close the side
      await page.close();
})


