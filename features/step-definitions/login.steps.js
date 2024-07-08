const { Before, Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/login.page');
const MenuPage = require('../../pages/menu.page');
const LOGIN_USERS = require('../../data/loginUsers');

Before(async () => {
    console.log('Before each iteration setup');
    await MenuPage.expandMenuButton.click();
    await MenuPage.loginMenuOption.click();
});

Given('I launch the application', async () => {
});

When('I enter {string} user credentials', async (userType) => {
    const user = LOGIN_USERS[userType];
    await LoginPage.enterUsername(user.username);
    await LoginPage.enterPassword(user.password);
});

When('I click the login button', async () => {
    await LoginPage.clickLoginButton();
});

Then('I should see the {string}', async (message) => {
    await LoginPage.verifyLogin(message);
});
