const { test, expect } = require('@playwright/test');
const { Login } = require('../selectors/Login.spec');
test('Login', async ({ page }) => {
      //visit to site
      await page.goto('/')

      //Login 
      await expect(page.locator(Login.Login)).toHaveText('Log in');
      //Click on Login
      const login = page.locator(Login.Login);
      await login.click();

      //Label username
      await expect(page.locator(Login.Userlable)).toHaveText('Username:')
      //User input field 
      const usernameinput = page.locator(Login.UserInput)
      await usernameinput.fill('usernanme')

      //Label Password
      await expect(page.locator(Login.passwordlable)).toHaveText('Password:')

      //User Password field 
      const passwordinput = page.locator(Login.passwordinput)
      await passwordinput.fill('password123')

      //Click on login 
      const loginbotton = page.locator(Login.Loginbtn)
      await loginbotton.click()



})