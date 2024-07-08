const { Then } = require('@wdio/cucumber-framework');
const ProductsPage = require('../../pages/products.page');

Then('I should see the product catalog', async () => {
    await expect(ProductsPage.productsHeader).toHaveText("Products");
});
