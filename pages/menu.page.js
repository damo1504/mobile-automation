class MenuPage {
    get expandMenuButton() {
        return driver.isAndroid ? $("~open menu") : $("~tab bar option menu");
    }

    get loginMenuOption() {
        return driver.isAndroid ? $('//*[@text="Log In"]') : $('//XCUIElementTypeOther[@name="menu item log in"]');
    }
}

module.exports = new MenuPage();