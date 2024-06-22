import { test, expect } from "@playwright/test";

const productId = "cGjFJlmqNPIwU59AOcY8H";
const LOCALHOST_URL = `http://localhost:5173/product/${productId}`;

test("Title Verification", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const titleElement = await page.waitForSelector("h1");
  const titleText = await titleElement.innerText();

  expect(titleText).toContain("Details");
});

test("Button Verification", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const titleElement = await page.waitForSelector("button");
  const titleText = await titleElement.innerText();

  expect(titleText).toContain("Clear cart");
});
