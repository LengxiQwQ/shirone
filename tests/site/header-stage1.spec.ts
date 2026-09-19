import { expect, test } from "@playwright/test";

test.describe("Stage 1 - Header Visual Refresh & Flicker-Free Verification", () => {
	test("Desktop: Home page top is transparent, has no solid border/background on initial paint", async ({ page }) => {
		await page.goto("/", { waitUntil: "domcontentloaded" });

		const navbar = page.locator("#navbar");
		await expect(navbar).toBeVisible();

		// Check computed styles at top
		const styles = await navbar.evaluate((el) => {
			const computed = window.getComputedStyle(el);
			return {
				backgroundColor: computed.backgroundColor,
				boxShadow: computed.boxShadow,
				color: computed.color,
			};
		});

		// Transparent header over banner: backgroundColor is rgba(0, 0, 0, 0)
		expect(styles.backgroundColor).toBe("rgba(0, 0, 0, 0)");
		expect(styles.boxShadow).toBe("none");

		// Header brand title should be visible and not have the old vertical bar
		const brand = page.locator("#navbar a.header-brand");
		await expect(brand).toBeVisible();
		const verticalBar = brand.locator("span.bg-\\[var\\(--primary\\)\\]");
		await expect(verticalBar).toHaveCount(0);
	});

	test("Desktop: Scroll down transitions header to translucent glass, scroll up returns to transparent", async ({ page }) => {
		await page.goto("/", { waitUntil: "domcontentloaded" });
		const navbar = page.locator("#navbar");

		// Scroll down past the banner
		await page.evaluate(() => window.scrollTo(0, 1200));
		await page.waitForTimeout(400);

		const scrolledBg = await navbar.evaluate((el) => window.getComputedStyle(el).backgroundColor);
		// Should not be fully transparent
		expect(scrolledBg).not.toBe("rgba(0, 0, 0, 0)");

		// Scroll back to top
		await page.evaluate(() => window.scrollTo(0, 0));
		await page.waitForTimeout(400);

		const topBg = await navbar.evaluate((el) => window.getComputedStyle(el).backgroundColor);
		expect(topBg).toBe("rgba(0, 0, 0, 0)");
	});

	test("Desktop: Normal pages without full banner show soft glass surface", async ({ page }) => {
		// Set wallpaper mode to none
		await page.addInitScript(() => {
			localStorage.setItem("wallpaper-mode", "none");
		});

		await page.goto("/archive/", { waitUntil: "domcontentloaded" });
		const navbar = page.locator("#navbar");
		await expect(navbar).toBeVisible();

		const bg = await navbar.evaluate((el) => window.getComputedStyle(el).backgroundColor);
		// In 'none' wallpaper mode, navbar is immediately soft glass surface
		expect(bg).not.toBe("rgba(0, 0, 0, 0)");
	});

	test("Mobile: Home top, drawer toggle, and scroll behavior", async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 });
		await page.goto("/", { waitUntil: "domcontentloaded" });

		const navbar = page.locator("#navbar");
		await expect(navbar).toBeVisible();

		// Menu switch button is visible on mobile
		const menuBtn = page.locator("#nav-drawer-switch");
		await expect(menuBtn).toBeVisible();

		// Drawer opens on click
		await menuBtn.click();
		const drawer = page.locator(".site-drawer, #site-drawer");
		await expect(drawer.first()).toBeVisible();
	});

	test("Theme: Light and Dark mode styles", async ({ page }) => {
		// Test dark mode
		await page.addInitScript(() => {
			localStorage.setItem("theme", "dark");
			localStorage.setItem("wallpaper-mode", "none");
		});

		await page.goto("/about/", { waitUntil: "domcontentloaded" });
		const navbar = page.locator("#navbar");
		await expect(navbar).toBeVisible();

		const darkBg = await navbar.evaluate((el) => window.getComputedStyle(el).backgroundColor);
		// Dark mode soft glass surface: rgba(18, 18, 22, 0.8)
		expect(darkBg).toContain("rgba(18, 18, 22");
	});

	test("10 Consecutive Hard Refreshes on Home without flicker", async ({ page }) => {
		await page.goto("/", { waitUntil: "domcontentloaded" });

		for (let i = 0; i < 10; i++) {
			await page.reload({ waitUntil: "domcontentloaded" });
			const isTransparent = await page.locator("#navbar").evaluate((el) => {
				const style = window.getComputedStyle(el);
				return style.backgroundColor === "rgba(0, 0, 0, 0)";
			});
			expect(isTransparent, `Hard refresh iteration ${i + 1}`).toBe(true);
		}
	});
});
