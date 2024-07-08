class ProductsPage {
    get productsHeader() {
        return driver.isAndroid ? $(
            'android=new UiSelector().text("Products").className("android.widget.TextView")') : $(
                '//XCUIElementTypeStaticText[@name="Products"]'
            );
    }
}

module.exports = new ProductsPage();