const { test, expect } = require('@playwright/test');
const { signup } = require('../selectors/signupselector.spec');


test('Signup', async ({ page }) => {
      await page.goto('/')
      //signin 
      await expect(page.locator(signup.Signin)).toHaveText('Sign up');

      //Click on signup 
      const signbtn = page.locator(signup.Signin)
      await signbtn.click()


      //Verify the text after click
      await expect(page.locator(signup.signtitletext)).toHaveText('Sign up')

      //Verify the Username
      await expect(page.locator(signup.usernamelable)).toHaveText('Username:')

      //Type username
      const usernamein = page.locator(signup.usernameinput)
      await usernamein.fill('test2345')

      //Verify the password lable 
      await expect(page.locator(signup.userpasswordlable)).toHaveText('Password:')

      //Type password 
      const userpasswordfield = page.locator(signup.userspasswordinput)
      await userpasswordfield.fill('test1234@')

      //singup 
      const singupp = page.locator(signup.signupbtnnn)
      await singupp.click()



})