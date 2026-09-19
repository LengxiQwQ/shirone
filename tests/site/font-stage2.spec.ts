import { test, expect } from "@playwright/test";

test.describe("Stage 2: Fonts Verification", () => {
	test("verifies body text, CJK text, and code font stacks", async ({ page }) => {
		await page.goto("/");
		await page.waitForLoadState("networkidle");

		// Check root CSS variables
		const fontRootVars = await page.evaluate(() => {
			const style = getComputedStyle(document.documentElement);
			return {
				fontBody: style.getPropertyValue("--font-body"),
				fontCjk: style.getPropertyValue("--font-cjk"),
				m3eFontSans: style.getPropertyValue("--m3e-font-sans"),
				m3eFontMono: style.getPropertyValue("--m3e-font-mono-family"),
			};
		});

		console.log("Root font variables:", fontRootVars);

		// Ensure Yozai is nowhere in the root font variables
		expect(fontRootVars.m3eFontSans.toLowerCase()).not.toContain("yozai");
		expect(fontRootVars.fontCjk.toLowerCase()).not.toContain("yozai");

		// Check computed font-family on article card title
		const postTitle = page.locator(".post-card, article").first();
		if (await postTitle.count() > 0) {
			const titleFont = await postTitle.evaluate((el) => getComputedStyle(el).fontFamily);
			console.log("Post card font family:", titleFont);
			expect(titleFont.toLowerCase()).not.toContain("yozai");
		}

		// Take desktop home screenshot
		await page.setViewportSize({ width: 1440, height: 900 });
		await page.screenshot({
			path: "C:/Users/LengxiQwQ/.gemini/antigravity/brain/9409aaf4-4ce2-463b-a64f-3ae6d26f2091/stage2-desktop-home-font.png",
			fullPage: false,
		});

		// Navigate to an article
		const firstArticleLink = page.locator('a[href^="/posts/"]').first();
		if (await firstArticleLink.count() > 0) {
			await firstArticleLink.click();
			await page.waitForLoadState("networkidle");

			// Check article body font
			const articleBody = page.locator("#markdown-content, .custom-md, article").first();
			expect(await articleBody.count()).toBeGreaterThan(0);

			const articleFont = await articleBody.evaluate((el) => getComputedStyle(el).fontFamily);
			console.log("Article body font:", articleFont);
			expect(articleFont.toLowerCase()).not.toContain("yozai");

			// Check code block font
			const codeBlock = page.locator("pre code, .expressive-code code").first();
			if (await codeBlock.count() > 0) {
				const codeFont = await codeBlock.evaluate((el) => getComputedStyle(el).fontFamily);
				console.log("Code block font:", codeFont);
				expect(codeFont.toLowerCase()).toContain("jetbrains mono");
			}

			// Screenshot article with mixed text and code
			await page.screenshot({
				path: "C:/Users/LengxiQwQ/.gemini/antigravity/brain/9409aaf4-4ce2-463b-a64f-3ae6d26f2091/stage2-article-font.png",
				fullPage: false,
			});
		}
	});
});
