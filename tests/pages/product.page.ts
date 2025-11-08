import { Page, Locator } from "@playwright/test";

export class ProductPage {
  constructor(public page: Page) {}

  private get addToCartButton(): Locator {
    return this.page.getByRole("button", { name: "Add to cart" });
  }

  private get quantityInput(): Locator {
    return this.page.getByLabel("Product quantity");
  }

  private get cartIcon(): Locator {
    return this.page.locator(".ast-site-header-cart-li");
  }

  private get productName(): Locator {
    return this.page.locator("h1.product_title.entry-title");
  }

  async changeQuantity(quantity: number) {
    await this.quantityInput.fill(quantity.toString());
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async getProductName(): Promise<string> {
    const productName = await this.productName.textContent();

    return (productName ?? "").trim();
  }
}
