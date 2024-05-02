import { test, expect, devices } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test("card images render properly", async ({ page }) => {
  const carousel = page.getByRole("region").first();
  for (const card of await carousel.getByRole("group").all()) {
    await expect(card.locator("img")).toBeVisible();
  }
});

test.describe("carousel", () => {
  test.describe("desktop", () => {
    test.use({ viewport: { width: 1100, height: 720 } });

    test("only first two to three images visible", async ({ page }) => {
      const carousel = page.getByRole("region").first();
      await carousel.scrollIntoViewIfNeeded();

      const cards = await carousel.getByRole("group").all();

      if (cards.length <= 3) {
        for (const card of await carousel.getByRole("group").all()) {
          await expect(card).toBeInViewport();
        }
      }

      if (cards.length > 3) {
        for (let i = 0; i <= 2; i++) {
          await expect(carousel.getByRole("group").nth(i)).toBeInViewport();
        }

        for (let i = 4; i <= cards.length; i++) {
          await expect(carousel.getByRole("group").nth(i)).not.toBeInViewport();
        }
      }
    });

    test("left arrow clicking changes slide", async ({ page }) => {
      const carousel = page.getByRole("region").first();
      await carousel.scrollIntoViewIfNeeded();
      const cards = await carousel.getByRole("group").all();
      let clicks = 0;

      if (cards.length <= 3) {
        await expect(carousel.locator("button").nth(0)).not.toBeInViewport();
      }

      if (cards.length > 3) {
        for (let i = cards.length - 1; i >= 3; i--) {
          await carousel.locator("button").nth(0).click();
          clicks += 1;
          if (clicks <= cards.length - 1) {
            async () =>
              await expect(carousel.getByRole("group").nth(i)).toBeInViewport();
          }
        }
      }
    });

    test("right arrow clicking changes slide", async ({ page }) => {
      const carousel = page.getByRole("region").first();
      await carousel.scrollIntoViewIfNeeded();
      const cards = await carousel.getByRole("group").all();
      let clicks = 0;

      if (cards.length <= 3) {
        await expect(carousel.locator("button").nth(1)).not.toBeInViewport();
      }

      if (cards.length > 3) {
        for (let i = 3; i < cards.length; i++) {
          await carousel.locator("button").nth(1).click();
          clicks += 1;
          if (clicks <= cards.length - 1) {
            async () =>
              await expect(carousel.getByRole("group").nth(i)).toBeInViewport();
          }
        }
      }
    });
  });

  test.describe("tablet", () => {
    test.use({ viewport: { width: 806, height: 720 } });

    test("only first two elements visible", async ({ page }) => {
      const carousel = page.getByRole("region").first();
      await carousel.scrollIntoViewIfNeeded();
      const cards = await carousel.getByRole("group").all();

      for (let i = 0; i <= 1; i++) {
        await expect(carousel.getByRole("group").nth(i)).toBeInViewport({
          ratio: 0.8,
        });
      }
      if (cards.length > 3) {
        for (let i = 3; i <= cards.length; i++) {
          await expect(carousel.getByRole("group").nth(i)).not.toBeInViewport();
        }
      }
    });
  });

  test.describe("mobile", () => {
    test.use({ viewport: { width: 640, height: 900 } });

    test("only first and partially second element visible", async ({
      page,
    }) => {
      for (const carousel of await page.getByRole("region").all()) {
        await carousel.scrollIntoViewIfNeeded();
        const cards = await carousel.getByRole("group").all();

        await expect(carousel.getByRole("group").nth(0)).toBeInViewport({
          ratio: 0.5,
        });
        await expect(carousel.getByRole("group").nth(1)).toBeInViewport();

        if (cards.length > 2) {
          for (let i = 2; i <= cards.length; i++) {
            await expect(
              carousel.getByRole("group").nth(i)
            ).not.toBeInViewport();
          }
        }
      }
    });

    test("right arrow clicking changes slide", async ({ page }) => {
      const carousel = page.getByRole("region").first();
      await carousel.scrollIntoViewIfNeeded();
      const cards = await carousel.getByRole("group").all();
      let clicks = 0;

      for (let i = 1; i < cards.length; i++) {
        await carousel.locator("button").nth(1).click();
        clicks += 1;
        if (clicks <= cards.length - 1) {
          async () =>
            await expect(carousel.getByRole("group").nth(i)).toBeInViewport();
        }
      }
    });

    test("left arrow clicking changes slide", async ({ page }) => {
      const carousel = page.getByRole("region").first();
      await carousel.scrollIntoViewIfNeeded();
      const cards = await carousel.getByRole("group").all();
      let clicks = 0;

      for (let i = cards.length - 1; i > 0; i--) {
        await carousel.locator("button").nth(0).click();
        clicks += 1;
        if (clicks <= cards.length - 1) {
          async () =>
            await expect(carousel.getByRole("group").nth(i)).toBeInViewport();
        }
      }
    });
  });
});

test.describe("navbar", () => {
  test.use({ viewport: { width: 1100, height: 720 } });

  test("submenu opens on hover", async ({ page }) => {
    await page.getByRole("button", { name: "See and do" }).hover();
    await expect(
      page.getByLabel("Main").getByText("SightsNatureFoodAccommodation")
    ).toBeInViewport();
    await page.getByRole("button", { name: "Plan your travel" }).hover();
    await expect(
      page.getByLabel("Main").getByText("SightsNatureFoodAccommodation")
    ).not.toBeInViewport();
    await expect(
      page.getByLabel("Main").getByText("PracticalitiesTrip itineraries")
    ).toBeInViewport();
  });
});

test.describe("mobile navbar", () => {
  test.use({ viewport: { width: 640, height: 900 } });

  test("submenu opens and closes on hover", async ({ page }) => {
    await page.getByLabel("Click to open/close navigation").click();
    await page.getByText("See and do").nth(1).click();
    await page.locator("html").click();
    await expect(
      page.getByText(
        "HomeSee and doSightsNatureFoodAccommodationPlan your travelPracticalitiesTrip"
      )
    ).toBeInViewport();
    await page.getByLabel("Click to open/close navigation").click();
    await expect(
      page.getByText(
        "HomeSee and doSightsNatureFoodAccommodationPlan your travelPracticalitiesTrip"
      )
    ).not.toBeInViewport();
  });

  test("submenu item navigates on click", async ({ page }) => {
    await page.getByLabel("Click to open/close navigation").click();
    await page.getByText("See and do").nth(1).click();
    await page.locator("html").click();
    await page.getByRole("menuitem", { name: "Sights" }).click();
    await expect(page).toHaveURL("http://localhost:3000/sights");
  });
});
