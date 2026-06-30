class CartPage {
  constructor(page) {
    this.page = page;
  }

  async addBackpack() {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
  }

  async removeBackpack() {
    await this.page.click('#remove-sauce-labs-backpack');
  }
}

module.exports = { CartPage };