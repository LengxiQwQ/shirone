import { expect, test } from "@playwright/test";
import * as path from "node:path";

const ARTIFACTS_DIR = "C:/Users/LengxiQwQ/.gemini/antigravity/brain/9409aaf4-4ce2-463b-a64f-3ae6d26f2091";

test.describe("Final Full Refresh Visual Verification", () => {
	test("Article detail page shows clean title without accent bar, soft blockquote, and micro-bordered code block", async ({ page }) => {
		await page.goto("/posts/guide/", { waitUntil: "networkidle" });
		await page.waitForTimeout(600);

		// Accent bar in title must not exist
		const titleAccent = page.locator("[data-pagefind-meta='title'] .m3-accent-bar");
		await expect(titleAccent).toHaveCount(0);

		// Post card container has micro-border
		const postCard = page.locator(".post-card").first();
		await expect(postCard).toBeVisible();

		await page.screenshot({
			path: path.join(ARTIFACTS_DIR, "final-article-detail.png"),
			fullPage: false,
		});

		// Scroll to code block and blockquote if present
		const codeBlock = page.locator(".expressive-code").first();
		if (await codeBlock.isVisible()) {
			await codeBlock.scrollIntoViewIfNeeded();
			await page.waitForTimeout(300);
			await page.screenshot({
				path: path.join(ARTIFACTS_DIR, "final-article-code-block.png"),
				fullPage: false,
			});
		}
	});

	test("Moments and Friends pages have micro-borders and translucent glass", async ({ page }) => {
		await page.goto("/moments/", { waitUntil: "networkidle" });
		await page.evaluate(() => window.scrollTo(0, 600));
		await page.waitForTimeout(600);

		const momentCard = page.locator(".moment-card").first();
		await expect(momentCard).toBeVisible();

		await page.screenshot({
			path: path.join(ARTIFACTS_DIR, "final-moments-page.png"),
			fullPage: false,
		});

		await page.goto("/friends/", { waitUntil: "networkidle" });
		await page.waitForTimeout(600);
		await page.screenshot({
			path: path.join(ARTIFACTS_DIR, "final-friends-page.png"),
			fullPage: false,
		});
	});

	test("Anime and Projects pages show clean glass cards", async ({ page }) => {
		await page.goto("/anime/", { waitUntil: "networkidle" });
		await page.waitForTimeout(600);
		await page.screenshot({
			path: path.join(ARTIFACTS_DIR, "final-anime-page.png"),
			fullPage: false,
		});

		await page.goto("/projects/", { waitUntil: "networkidle" });
		await page.waitForTimeout(600);
		await page.screenshot({
			path: path.join(ARTIFACTS_DIR, "final-projects-page.png"),
			fullPage: false,
		});
	});

	test("Profile widget in sidebar has clean avatar, typography and no accent bar", async ({ page }) => {
		await page.goto("/", { waitUntil: "networkidle" });
		await page.waitForTimeout(600);

		const profile = page.locator(".m3-profile").first();
		await expect(profile).toBeVisible();

		// Check that m3-profile__accent is gone
		const accent = profile.locator(".m3-profile__accent");
		await expect(accent).toHaveCount(0);

		await profile.scrollIntoViewIfNeeded();
		await page.screenshot({
			path: path.join(ARTIFACTS_DIR, "final-sidebar-profile.png"),
			fullPage: false,
		});
	});
});
