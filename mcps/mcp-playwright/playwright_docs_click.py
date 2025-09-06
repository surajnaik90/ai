"""Simple script to open Playwright website and click the 'Docs' link.

Prerequisites (run in Windows cmd):
  pip install playwright
  playwright install  # installs browser binaries

Run:
  python playwright_docs_click.py

This script launches Chromium (non-headless so you can watch), navigates to https://playwright.dev,
clicks the Docs link, waits for the docs intro page to load, prints the page title, then closes.
"""
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError

PLAYWRIGHT_SITE = "https://playwright.dev/"


def open_site_and_click_docs():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False, slow_mo=800)  # slow_mo just to visualize steps
        context = browser.new_context()
        page = context.new_page()
        print(f"Navigating to {PLAYWRIGHT_SITE} ...")
        page.goto(PLAYWRIGHT_SITE, wait_until="domcontentloaded")

        # Try primary locator strategy using accessible role/name.
        try:
            print("Clicking 'Docs' link via role locator ...")
            page.get_by_role("link", name="Docs").click(timeout=3000)
        except PlaywrightTimeoutError:
            # Fallback selector if role/name changes.
            print("Primary locator failed; trying CSS href selector ...")
            page.click("a[href='/docs/intro']")

        # Wait for docs page to load (URL contains /docs/ or /python/docs/ etc.)
        page.wait_for_url("**/docs/**")
        page.wait_for_timeout(2000)  # wait an additional 1 second
        title = page.title()
        print("Docs page title:", title)

        # Optional: take a screenshot.
        screenshot_path = "docs_page.png"
        page.screenshot(path=screenshot_path, full_page=False)
        print(f"Screenshot saved to {screenshot_path}")

        context.close()
        browser.close()
        return title


if __name__ == "__main__":
    try:
        open_site_and_click_docs()
    except Exception as e:
        print("Error running script:", e)
        raise
