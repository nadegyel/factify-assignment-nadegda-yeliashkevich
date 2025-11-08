import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {
  constructor(public page: Page) {}

  private get firstNameInput(): Locator {
    return this.page.getByRole("textbox", { name: "First name *" });
  }

  private get lastNameInput(): Locator {
    return this.page.getByRole("textbox", { name: "Last name *" });
  }

  private get addressInput(): Locator {
    return this.page.getByRole("textbox", { name: "Street address *" });
  }

  private get cityInput(): Locator {
    return this.page.getByRole("textbox", { name: "Town / City *" });
  }

  private get postcodeInput(): Locator {
    return this.page.getByRole("textbox", { name: "Postcode / ZIP *" });
  }

  private get phoneInput(): Locator {
    return this.page.getByRole("textbox", { name: "Phone *" });
  }

  private get emailInput(): Locator {
    return this.page.getByRole("textbox", { name: "Email address *" });
  }

  private get placeOrderButton(): Locator {
    return this.page.getByRole("button", { name: "Place order" });
  }

  private get invalidPaymentAlert(): Locator {
    return this.page.getByText("Invalid payment method.");
  }

  async filloutBillingData() {
    await this.firstNameInput.fill("Nadya");
    await this.lastNameInput.fill("Yeliashkevich");
    await this.addressInput.fill("Street");
    await this.cityInput.fill("Ashkelon");
    await this.postcodeInput.fill("13187");
    await this.phoneInput.fill("0501234567");
    await this.emailInput.fill("nadya@gmail.com");
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async verifyInvalidPaymentAlertIsVisible() {
    await expect(this.invalidPaymentAlert).toBeVisible();
  }
}
