import { test, expect } from "@playwright/test";

test("Inspect About page Chinese and English typography", async ({ page }) => {
	await page.goto("/about/");
	await page.waitForLoadState("networkidle");

	await page.setViewportSize({ width: 1440, height: 900 });
	await page.evaluate(() => window.scrollTo(0, 300));
	await page.waitForTimeout(400);

	await page.screenshot({
		path: "C:/Users/LengxiQwQ/.gemini/antigravity/brain/9409aaf4-4ce2-463b-a64f-3ae6d26f2091/stage2-about-chinese-typography.png",
		fullPage: false,
	});
});
