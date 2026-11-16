---
name: cli-anything
description: Control desktop GUI and creative apps (OBS, Blender, GIMP, Docker, etc.) deterministically via cli-hub structured CLI commands with JSON output instead of mouse clicks.
---

# CLI-Anything (`cli-hub`) — Agent-Native Control for Desktop & Creative Apps

Use `cli-anything-hub` (`cli-hub`) to discover, install, and run structured CLI wrappers for desktop GUI software (OBS Studio, Blender, GIMP, Audacity, Inkscape, VLC, etc.). Instead of guessing pixel coordinates on a screen, `cli-anything` exposes deterministic subcommands with machine-readable `--json` outputs.

## 1. Discovering & Installing App Harnesses (`cli-hub`)
 executable path: `cli-hub` in PATH or `~/.local/bin/cli-hub`.

- **List available app CLIs in the registry:**
  ```bash
  cli-hub list
  ```
- **Search for a specific software CLI (e.g., `obs`, `blender`, `gimp`, `audacity`, `inkscape`):**
  ```bash
  cli-hub search <keyword>
  ```
- **Install an app CLI wrapper:**
  ```bash
  cli-hub install <app-name>
  ```

## 2. Executing App Commands
Once installed via `cli-hub install <app>`, invoke the generated CLI with `--help` or `--json` to inspect its capabilities and execute actions deterministically:
```bash
cli-anything-<app> --help
```

## 3. Building a Custom CLI for Any Local Software Repo
If you need to turn a local application or GitHub repository into an agent-controllable CLI:
1. Analyze the backend/core actions of the target app.
2. Wrap stateful operations into a `Click`-based Python CLI that supports `--json` output and stateless one-shot commands.

## 4. Universal Desktop GUI Control via `agent-desktop` (Accessibility Tree)
When controlling arbitrary native Windows/macOS/Linux or Electron desktop GUI apps that do not have a dedicated `cli-hub` harness, read [references/agent-desktop.md](references/agent-desktop.md) (`vercel-labs/agent-desktop`). It inspects the OS native accessibility tree (Windows UI Automation / macOS AX / Linux AT-SPI) and returns deterministic JSON snapshots with element `refs` for fast, low-token clicking and typing without pixel guessing.
