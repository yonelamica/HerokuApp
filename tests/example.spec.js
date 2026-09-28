const { test, expect } = require('@playwright/test');

test.describe.parallel("The Internet - Functional Test Suite", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    // TC-001
    test("TC-001 - Verify Add Element functionality @smoke", async ({ page }) => {

        await page.getByText("Add/Remove Elements").click();

        await expect(page.getByRole("heading", {
            name: "Add/Remove Elements"
        })).toBeVisible();

        await page.getByRole("button", {
            name: "Add Element"
        }).click();

        await expect(page.getByRole("button", {
            name: "Delete"
        })).toBeVisible();
    });


    // TC-002
    test("TC-002 - Verify Delete Element functionality @regression", async ({ page }) => {

        await page.getByText("Add/Remove Elements").click();

        await page.getByRole("button", {
            name: "Add Element"
        }).click();

        const deleteButton = page.getByRole("button", {
            name: "Delete"
        });

        await expect(deleteButton).toBeVisible();

        await deleteButton.click();

        await expect(deleteButton).not.toBeVisible();
    });


    // TC-003
    test("TC-003 - Verify checkbox can be selected @smoke", async ({ page }) => {

        await page.getByText("Checkboxes").click();

        const checkbox = page.locator('input[type="checkbox"]').first();

        await expect(checkbox).not.toBeChecked();

        await checkbox.check();

        await expect(checkbox).toBeChecked();
    });


    // TC-004
    test("TC-004 - Verify checkbox can be deselected @regression", async ({ page }) => {

        await page.getByText("Checkboxes").click();

        const checkbox = page.locator('input[type="checkbox"]').first();

        await checkbox.check();

        await expect(checkbox).toBeChecked();

        await checkbox.uncheck();

        await expect(checkbox).not.toBeChecked();
    });


    // TC-005
    test("TC-005 - Verify valid login credentials @smoke", async ({ page }) => {

        await page.getByText("Form Authentication").click();

        await page.locator("#username").fill("tomsmith");
        await page.locator("#password").fill("SuperSecretPassword!");

        await page.getByRole("button", {
            name: "Login"
        }).click();

        await expect(page).toHaveURL(/secure/);

        await expect(page.locator("#flash")).toContainText(
            "You logged into a secure area!"
        );
    });


    // TC-006
    test("TC-006 - Verify invalid login credentials @negative", async ({ page }) => {

        await page.getByText("Form Authentication").click();

        await page.locator("#username").fill("invalid_user");
        await page.locator("#password").fill("invalid_password");

        await page.getByRole("button", {
            name: "Login"
        }).click();

        await expect(page.locator("#flash")).toContainText(
            "Your username is invalid!"
        );
    });


    // TC-007
    test("TC-007 - Verify dropdown selection @regression", async ({ page }) => {

        await page.getByText("Dropdown").click();

        const dropdown = page.locator("#dropdown");

        await dropdown.selectOption("1");

        await expect(dropdown).toHaveValue("1");
    });


    // TC-008
    test("TC-008 - Verify JavaScript alert can be accepted @smoke", async ({ page }) => {

        await page.getByText("JavaScript Alerts").click();

        page.once("dialog", async dialog => {
            expect(dialog.type()).toBe("alert");
            expect(dialog.message()).toBe("I am a JS Alert");

            await dialog.accept();
        });

        await page.getByRole("button", {
            name: "Click for JS Alert"
        }).click();

        await expect(page.locator("#result")).toHaveText(
            "You successfully clicked an alert"
        );
    });


    // TC-009
    test("TC-009 - Verify dynamic loading content @regression", async ({ page }) => {

        await page.getByText("Dynamic Loading").click();

        await page.getByRole("link", {
            name: "Example 1: Element on page that is hidden"
        }).click();

        await page.getByRole("button", {
            name: "Start"
        }).click();

        await expect(page.locator("#finish")).toHaveText(
            "Hello World!"
        );
    });


    // TC-010
    test("TC-010 - Verify broken images can be identified @validation", async ({ page }) => {

        await page.getByText("Broken Images").click();

        const images = page.locator("img");

        const imageCount = await images.count();

        let brokenImages = 0;

        for (let i = 0; i < imageCount; i++) {

            const image = images.nth(i);

            const naturalWidth = await image.evaluate(
                img => img.naturalWidth
            );

            if (naturalWidth === 0) {
                brokenImages++;
            }
        }

        console.log(`Total images: ${imageCount}`);
        console.log(`Broken images: ${brokenImages}`);

        expect(imageCount).toBeGreaterThan(0);
    });

});