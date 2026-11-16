---
name: playwright-mcp
description: Mandatory Look-First & Verify browser automation with Playwright MCP — navigate, screenshot, click/type, console logs, before/after UI tasks.
---

# Playwright MCP: Look-First & Visual Verification Protocol

Whenever the user asks to inspect, fix, style, or build any Web / UI feature:

## 1. PRE-FLIGHT VISUAL CHECK (LOOK FIRST BEFORE CODING)
- **Never code blindly**: Before editing UI/web code, if the local dev server or target URL is running, open it first using `browser_navigate`.
- **Take & View Screenshot**: Call `browser_take_screenshot` (save to `tests/screenshots/`) and **read/view the image file** using `read_file` so you can see the actual visual layout, spacing, and bugs with your own eyes.
- **Check Console & DOM**: Call `browser_console_messages` and `browser_snapshot` to catch runtime errors or broken elements before making assumptions.

## 2. INTERACTIVE TESTING & POST-FLIGHT PROOF
- After applying surgical code edits:
  1. Navigate/reload the page with `browser_navigate`.
  2. Perform real user interactions (`browser_click`, `browser_type`, `browser_fill_form`) — never just check static HTML.
  3. Check `browser_console_messages` to ensure zero uncaught errors.
  4. Take an "After" screenshot in `tests/screenshots/` and inspect it visually to confirm pixel-perfect symmetry, safe-area compliance, and functional success before reporting to the user.
