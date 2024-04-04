import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test("card images render properly", async ({ page }) => {
  for (const carousel of await page.getByRole("region").all()) {
    for (const card of await carousel.getByRole("group").all()) {
      await expect(card.locator("img")).toBeVisible();
    }
  }
});

test.describe("carousel", () => {
  test.describe("desktop", () => {
    test.use({ viewport: { width: 960, height: 720 } });

    test("only first two to three images visible", async ({ page }) => {
      for (const carousel of await page.getByRole("region").all()) {
        await carousel.scrollIntoViewIfNeeded();

        const cards = await carousel.getByRole("group").all();

        if (cards.length <= 3) {
          for (let i = 0; i < cards.length; i++) {
            await expect(carousel.getByRole("group").nth(i)).toBeInViewport();
          }
        }
        if (cards.length > 3) {
          for (let i = 0; i <= 2; i++) {
            await expect(carousel.getByRole("group").nth(i)).toBeInViewport();
          }

          for (let i = 4; i <= cards.length; i++) {
            await expect(
              carousel.getByRole("group").nth(i)
            ).not.toBeInViewport();
          }
        }
      }
    });
  });

  test.describe("tablet", () => {
    test.use({ viewport: { width: 720, height: 720 } });

    test("only first two elements visible", async ({ page }) => {
      for (const carousel of await page.getByRole("region").all()) {
        await carousel.scrollIntoViewIfNeeded();
        const cards = await carousel.getByRole("group").all();

        for (let i = 0; i < 1; i++) {
          await expect(carousel.getByRole("group").nth(i)).toBeInViewport({
            ratio: 0.8,
          });
        }
        if (cards.length > 2) {
          for (let i = 3; i <= cards.length; i++) {
            await expect(
              carousel.getByRole("group").nth(i)
            ).not.toBeInViewport();
          }
        }
      }
    });
  });

  test.describe("mobile", () => {
    test.use({ viewport: { width: 640, height: 300 } });

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

      for (let i = 1; i < cards.length - 2; i++) {
        await carousel.locator("button").last().click();
        clicks += 1;
        if (clicks < cards.length - 1) {
          setTimeout(
            async () =>
              await expect(
                carousel.getByRole("group").nth(i + 1)
              ).toBeInViewport(),
            1000
          );
        } else if (clicks === cards.length - 1) {
          setTimeout(
            async () =>
              await expect(carousel.getByRole("group").nth(0))
                .toBeInViewport()
                .then(() => (clicks = 0)),
            1000
          );
        }
      }
    });

    test("left arrow clicking changes slide", async ({ page }) => {
      const carousel = page.getByRole("region").first();
      await carousel.scrollIntoViewIfNeeded();
      const cards = await carousel.getByRole("group").all();
      let clicks = 0;

      for (let i = cards.length; i >= 1; i--) {
        await carousel.locator("button").nth(cards.length).click();
        clicks += 1;
        if (clicks < cards.length - 1) {
          setTimeout(
            async () =>
              await expect(
                carousel.getByRole("group").nth(i - 1)
              ).toBeInViewport(),
            2000
          );
        } else if (clicks === cards.length - 1) {
          setTimeout(
            async () =>
              await expect(carousel.getByRole("group").nth(0))
                .toBeInViewport()
                .then(() => (clicks = 0)),
            2000
          );
        }
      }
    });
  });
});
