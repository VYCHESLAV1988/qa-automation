class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async startCheckout() {
    await this.page.click('#checkout');
  }

  async fillInfo(firstName, lastName, postalCode) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
    await this.page.click('#continue');
  }

  async finish() {
    await this.page.click('#finish');
  }
}

module.exports = { CheckoutPage };