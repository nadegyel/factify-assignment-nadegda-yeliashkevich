import { test } from "../fixtures/test";

test("User can add product to cart and initiate checkout flow", async ({
  catalogue,
  product,
  cart,
  checkout,
}) => {
  const desiredProductQuantity = 2;

  await catalogue.openCataloguePage();
  await catalogue.clickProduct();
  await product.changeQuantity(desiredProductQuantity);
  await product.addProductToCart();

  const productName = await product.getProductName();

  await product.goToCart();
  await cart.verifyProductIsInCart(productName);
  await cart.verifyCartTotals();
  await cart.proceedToCheckout();
  await checkout.filloutBillingData;
  await checkout.placeOrder();
  await checkout.verifyInvalidPaymentAlertIsVisible();
});
