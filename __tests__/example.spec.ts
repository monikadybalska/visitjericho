import { test, expect, Locator } from "@playwright/test";

// const isInViewport = async (element: Locator): Promise<boolean> => {
//   const viewportSize = element.page().viewportSize();
//   const boundingBox = await element.boundingBox();

//   if (!viewportSize || !boundingBox) {
//     return false;
//   }

//   const isBoundingBoxVisible = boundingBox.x >= 0 && boundingBox.y >= 0;
//   const isBoundingBoxInViewport =
//     boundingBox.x + boundingBox.width <= viewportSize.width &&
//     boundingBox.y + boundingBox.height <= viewportSize.height;

//   return isBoundingBoxVisible && isBoundingBoxInViewport;
// };

test("first carousel slide visible", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  for (const carousel of await page.getByRole("region").all()) {
    await carousel.scrollIntoViewIfNeeded();

    for (let i = 0; i <= 2; i++) {
      await expect(carousel.getByRole("group").nth(i)).toBeInViewport();
    }
    // const slide1 = carousel.getByRole("group").first();
    // const slide2 = carousel.getByRole("group").nth(2);
    // const slide3 = carousel.getByRole("group").nth(3);
    // await expect().toBeInViewport();
  }
  // const carousel1 = page.getByRole("region").first();

  // await carousel1.scrollIntoViewIfNeeded();

  // const slide1 = carousel1.getByRole("group").nth(3);

  // await expect(slide1).toBeInViewport();
});
