import { test, expect } from "@playwright/test";

test("Detailed typography and baseline inspection on post page", async ({ page }) => {
	await page.goto("/posts/expressive-code/");
	await page.waitForLoadState("networkidle");

	// Scroll down into content
	await page.evaluate(() => window.scrollTo(0, 800));
	await page.waitForTimeout(500);

	const rootVars = await page.evaluate(() => {
		const s = getComputedStyle(document.documentElement);
		return {
			fontBody: s.getPropertyValue("--font-body"),
			fontCjk: s.getPropertyValue("--font-cjk"),
			fontMono: s.getPropertyValue("--font-mono"),
			m3eFontMonoFallback: s.getPropertyValue("--m3e-font-mono-fallback"),
			m3eFontMonoFamily: s.getPropertyValue("--m3e-font-mono-family"),
		};
	});
	console.log("Root font variables on article page:", rootVars);

	// Verify article code block font is JetBrains Mono
	const codeEl = page.locator("#markdown-content .expressive-code pre, #markdown-content pre code, .expressive-code code").first();
	if (await codeEl.count() > 0) {
		const info = await codeEl.evaluate((el) => {
			return {
				outerHTML: el.outerHTML.slice(0, 150),
				className: el.className,
				computedFontFamily: getComputedStyle(el).fontFamily,
			};
		});
		console.log("Article code block details:", info);
		expect(info.computedFontFamily.toLowerCase()).toContain("jetbrains mono");
	}

	// Verify article paragraph font
	const pEl = page.locator("#markdown-content p, .custom-md p").first();
	if (await pEl.count() > 0) {
		const pFamily = await pEl.evaluate((el) => getComputedStyle(el).fontFamily);
		console.log("Paragraph font family:", pFamily);
		expect(pFamily.toLowerCase()).not.toContain("yozai");
	}

	// Take full screenshot of reading area
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.screenshot({
		path: "C:/Users/LengxiQwQ/.gemini/antigravity/brain/9409aaf4-4ce2-463b-a64f-3ae6d26f2091/stage2-article-reading-flow.png",
		fullPage: false,
	});
});
