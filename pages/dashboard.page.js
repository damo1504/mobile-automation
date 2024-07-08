class DashboardPage {
    get welcomeMessage() {
        return driver.isAndroid ? $('~welcome') : $('-ios predicate string:type == "XCUIElementTypeStaticText" && name == "welcome"');
    }

    get errorMessage() {
        return driver.isAndroid ? $('~error') : $('-ios predicate string:type == "XCUIElementTypeStaticText" && name == "error"');
    }

    async verifyLogin(message) {
        if (message === 'Welcome') {
            await expect(this.welcomeMessage).toBeDisplayed();
        } else {
            await expect(this.errorMessage).toHaveText(message);
        }
    }
}

module.exports = new DashboardPage();