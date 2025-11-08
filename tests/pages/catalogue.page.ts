import { Page, Locator } from "@playwright/test";

export class CataloguePage {
  constructor(public page: Page) {}

  private get productTile(): Locator {
    return this.page.locator(".astra-shop-thumbnail-wrap");
  }

  async openCataloguePage() {
    await this.page.goto("/");
  }

  async clickProduct() {
    await this.productTile.first().click();
  }
}
