class LoginPage {
    get usernameInput() {
        return $('~Username input field');
    }

    get passwordInput() {
        return $('~Password input field');

    }

    get loginButton() {
        return $('~Login button');
    }

    async enterUsername(username) {
        await this.usernameInput.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async verifyLogin(message) {
        let eleErrorMessage = await driver.isAndroid ? $(
            `//android.widget.TextView[@text="${message}"]`)
            : $(`//XCUIElementTypeStaticText[@name="${message}"]`);
        await expect(eleErrorMessage).toBeDisplayed();
    }
}

module.exports = new LoginPage();
