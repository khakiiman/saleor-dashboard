import { USER_PERMISSION } from "@data/userPermissions";
import { LoginPage } from "@pages/loginPage";
import { test as setup } from "@playwright/test";

const adminFile = "playwright/.auth/admin.json";
const translationPermissionsFile = "playwright/.auth/translations.json";
const productPermissionsFile = "playwright/.auth/product.json";
const discountPermissionsFile = "playwright/.auth/discount.json";
const settingsPermissionsFile = "playwright/.auth/settings.json";
const staffMemberPermissionsFile = "playwright/.auth/staff-member.json";
const ordersPermissionsFile = "playwright/.auth/orders.json";
const shippingPermissionsFile = "playwright/.auth/shipping.json";
const appsPermissionsFile = "playwright/.auth/apps.json";
const pluginPermissionsFile = "playwright/.auth/plugins.json";
const productTypePermissionsFile = "playwright/.auth/product-type.json";
const giftCardsPermissionsFile = "playwright/.auth/gift-cards.json";
const contentPermissionsFile = "playwright/.auth/content.json";
const channelsWebhooksPermissionsFile =
  "playwright/.auth/channels-webhooks.json";
const customerWebhooksPermissionsFile = "playwright/.auth/customer.json";

setup("authenticate as admin", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    process.env.CYPRESS_USER_NAME!,
    process.env.CYPRESS_USER_PASSWORD!,
    page,
    adminFile,
  );
});
setup("authenticate as user with discount permissions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    USER_PERMISSION.discount,
    process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
    page,
    discountPermissionsFile,
  );
});

setup("authenticate as user with orders permissions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    USER_PERMISSION.order,
    process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
    page,
    ordersPermissionsFile,
  );
});
setup("authenticate as user with apps permissions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    USER_PERMISSION.app,
    process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
    page,
    appsPermissionsFile,
  );
});
setup("authenticate as user with channels permissions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    USER_PERMISSION.channel,
    process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
    page,
    channelsWebhooksPermissionsFile,
  );
});
setup("authenticate as user with customer permissions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    USER_PERMISSION.customer,
    process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
    page,
    customerWebhooksPermissionsFile,
  );
});
setup("authenticate as user with gift cards permissions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    USER_PERMISSION.giftCard,
    process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
    page,
    giftCardsPermissionsFile,
  );
});
setup(
  "authenticate as user with content aka page permissions",
  async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginAndSetStorageState(
      USER_PERMISSION.page,
      process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
      page,
      contentPermissionsFile,
    );
  },
);
setup("authenticate as user with plugins permissions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    USER_PERMISSION.plugin,
    process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
    page,
    pluginPermissionsFile,
  );
});
setup(
  "authenticate as user with product type permissions",
  async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginAndSetStorageState(
      USER_PERMISSION.productTypeAndAttribute,
      process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
      page,
      productTypePermissionsFile,
    );
  },
);
setup("authenticate as user with settings permissions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    USER_PERMISSION.settings,
    process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
    page,
    settingsPermissionsFile,
  );
});
setup(
  "authenticate as user with staff member permissions",
  async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginAndSetStorageState(
      USER_PERMISSION.staff,
      process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
      page,
      staffMemberPermissionsFile,
    );
  },
);
setup("authenticate as user with shipping permissions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    USER_PERMISSION.shipping,
    process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
    page,
    shippingPermissionsFile,
  );
});
setup("authenticate as user with translation permissions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    USER_PERMISSION.translations,
    process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
    page,
    translationPermissionsFile,
  );
});
setup("authenticate as user with product permissions", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginAndSetStorageState(
    USER_PERMISSION.product,
    process.env.CYPRESS_PERMISSIONS_USERS_PASSWORD!,
    page,
    productPermissionsFile,
  );
});
