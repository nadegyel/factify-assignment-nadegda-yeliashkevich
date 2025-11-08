import { Page, Locator, expect } from "@playwright/test";
import { extractNumericValue } from "../helpers/numberUtils";

export class CartPage {
  constructor(public page: Page) {}

  private get cartItem(): Locator {
    return this.page.locator("td.product-name a");
  }

  private get productPrice(): Locator {
    return this.page.locator("td.product-price .woocommerce-Price-amount bdi");
  }

  private get productQuantity(): Locator {
    return this.page.locator("td.product-quantity input.input-text.qty.text");
  }

  private get checkoutButton(): Locator {
    return this.page.getByRole("link", { name: "Proceed to checkout" });
  }

  private get cartTotal(): Locator {
    return this.page.locator(
      "td.product-subtotal .woocommerce-Price-amount bdi"
    );
  }

  async verifyProductIsInCart(productTitle: string) {
    await expect(this.cartItem).toBeVisible();
    await expect(this.cartItem).toHaveText(productTitle);
  }

  async verifyCartTotals() {
    const itemPrice = extractNumericValue(await this.productPrice.innerText());
    const cartTotal = extractNumericValue(await this.cartTotal.innerText());
    const quantity = parseInt(await this.productQuantity.inputValue(), 10);
    const expectedTotal = itemPrice * quantity;

    await expect(cartTotal).toBeCloseTo(expectedTotal, 2);
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
