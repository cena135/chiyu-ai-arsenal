---
name: agent-reach
description: Fast zero-API-fee extraction of web pages, social threads (X/Reddit/LinkedIn/RedNote), GitHub, and video transcripts (YouTube/TikTok/Bilibili) via agent-reach CLI; for visual UI testing use playwright-mcp.
---

# Agent-Reach — Zero-Fee Internet, Social & Video Extractor

Use `agent-reach` (`agent-reach` in PATH or `~/.local/bin/agent-reach`) whenever you need to read web articles, extract YouTube/TikTok transcripts, or search Twitter/X, Reddit, and GitHub without paying API fees or launching a heavy Chromium browser.

## When to Use `agent-reach` vs `playwright-mcp`
- **Use `agent-reach`** for:
  - Reading web documentation, blogs, or news as clean Markdown (90% fewer tokens).
  - Extracting transcripts/subtitles from YouTube, TikTok, or Bilibili videos (e.g. for video processing or research).
  - Searching or reading threads on X (Twitter), Reddit, LinkedIn, or GitHub.
- **Use `playwright-mcp`** for:
  - Visual UI inspection (`Look-First` screenshot verification), layout/CSS debugging, clicking interactive buttons, and checking browser console logs.

## Core CLI Commands
All commands output structured JSON (`ok`, `result`, `error.hint`):
- Check status & available channels:
  ```bash
  agent-reach doctor
  ```
- Read any webpage / URL (Web, X, Reddit, YouTube, GitHub):
  ```bash
  agent-reach read "<url>"
  ```
- Search across supported platforms:
  ```bash
  agent-reach search "<query>"
  ```
- Update tool & channels:
  ```bash
  agent-reach update
  ```
