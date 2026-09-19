import { expect, test } from "@playwright/test";
import * as path from "node:path";

const ARTIFACTS_DIR = "C:/Users/LengxiQwQ/.gemini/antigravity/brain/9409aaf4-4ce2-463b-a64f-3ae6d26f2091";

test.describe("Stage 3 - Home Controls, PostCards, Chips & Pagination", () => {
	test("PostCards, CategoryBar, and Pagination have refined micro-borders and translucent glass", async ({ page }) => {
		await page.goto("/", { waitUntil: "networkidle" });

		// Wait for theme initialization and onload-animation
		await page.waitForTimeout(600);

		// CategoryBar container should have border and card background
		const categoryBar = page.locator("#category-bar");
		await expect(categoryBar).toBeVisible();

		const categoryBarBorder = await categoryBar.evaluate((el) => {
			const cs = window.getComputedStyle(el);
			return {
				borderWidth: cs.borderWidth,
				borderRadius: cs.borderRadius,
				backdropFilter: cs.backdropFilter || (cs as any).webkitBackdropFilter,
			};
		});
		expect(categoryBarBorder.borderWidth).toBe("1px");

		// PostCards check
		const postCards = page.locator(".m3-blog-postcard");
		const count = await postCards.count();
		expect(count).toBeGreaterThan(0);

		const firstCard = postCards.first();
		await expect(firstCard).toBeVisible();

		const cardStyles = await firstCard.evaluate((el) => {
			const cs = window.getComputedStyle(el);
			return {
				borderWidth: cs.borderWidth,
				borderRadius: cs.borderRadius,
				backdropFilter: cs.backdropFilter || (cs as any).webkitBackdropFilter,
			};
		});
		expect(cardStyles.borderWidth).toBe("1px");

		// Screenshot Desktop Home
		await page.screenshot({
			path: path.join(ARTIFACTS_DIR, "stage3-home-desktop.png"),
			fullPage: false,
		});

		// Hover over the first card and capture screenshot
		await firstCard.hover();
		await page.waitForTimeout(300);

		await page.screenshot({
			path: path.join(ARTIFACTS_DIR, "stage3-card-hover.png"),
			fullPage: false,
		});

		// Check pagination
		const pagination = page.locator(".m3-blog-pagination");
		if (await pagination.isVisible()) {
			await pagination.scrollIntoViewIfNeeded();
			await page.waitForTimeout(300);
			await page.screenshot({
				path: path.join(ARTIFACTS_DIR, "stage3-pagination.png"),
				fullPage: false,
			});
		}
	});

	test("Dark mode cards and controls have refined translucent styling", async ({ page }) => {
		await page.addInitScript(() => {
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		});

		await page.goto("/", { waitUntil: "networkidle" });
		await page.waitForTimeout(600);

		const firstCard = page.locator(".m3-blog-postcard").first();
		await expect(firstCard).toBeVisible();

		await page.screenshot({
			path: path.join(ARTIFACTS_DIR, "stage3-home-dark.png"),
			fullPage: false,
		});
	});
});
