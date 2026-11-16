---
name: rea
description: Reverse-engineer closed-source targets (websites, minified JS, Electron apps, Chrome extensions, APKs, native binaries) with rea-agents MCP & CLI.
---

# REA — Reverse Engineer Anything (`morluto/rea`)

REA connects your AI agent to systematic software-inspection and reverse-engineering workflows via the `rea` MCP server (`npx -y rea-agents`) and CLI.

## When to Use REA
1. **Web & Frontend Reverse Engineering:**
   - Unpacking minified/bundled JavaScript, WebGL shaders, animation physics, or hidden API calls from a live website or web app.
2. **Electron & Desktop App Inspection:**
   - Extracting and analyzing `app.asar` bundles from Electron apps (like Discord, Notion, Obsidian, VS Code extensions) to see how features are implemented under the hood.
3. **Native Binaries & Mobile Artifacts:**
   - Inspecting PE (`.exe`/`.dll`), ELF, Mach-O binaries, or Android APKs (connecting with Ghidra/Hopper/IDA when installed locally) to trace functions, strings, and call graphs.

## Core Principles
- **Evidence-First:** Never guess how a target binary or obfuscated app works. Use REA's MCP inspection tools to gather concrete evidence (strings, exports, ASTs, network endpoints) before proposing a clone or implementation.
- **Compact Schema by Default:** REA runs with `REA_MCP_INPUT_SCHEMA_PROFILE=compact` in `mcp_config.json` to keep context usage low while retaining full tool capabilities.
