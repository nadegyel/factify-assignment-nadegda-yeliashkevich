import { test as base } from "@playwright/test";
import { CataloguePage } from "../pages/catalogue.page";
import { ProductPage } from "../pages/product.page";
import { CartPage } from "../pages/cart.page";
import { CheckoutPage } from "../pages/checkout.page";

type POMFixtures = {
  catalogue: CataloguePage;
  product: ProductPage;
  cart: CartPage;
  checkout: CheckoutPage;
};

export const test = base.extend<POMFixtures>({
  catalogue: async ({ page }, use) => {
    await use(new CataloguePage(page));
  },
  product: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cart: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkout: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});

export { expect } from "@playwright/test";
