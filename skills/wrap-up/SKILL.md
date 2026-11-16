---
name: wrap-up
description: End-of-session — writes a structured summary to the memory folder when the user says "wrap up" or the session ends, so a later session can pick it up.
---

# Wrap Up

Write a session summary to ~/claude-memory/YYYY-MM-DD-<short-slug>.md using today's date and a three or four word slug describing the session.

Use exactly these sections, in this order, and leave a section out entirely if it is empty rather than writing "none".

## Summary
One sentence on what this session was about.

## Decisions
Each decision on its own line, followed by the reason it was made. If a decision replaced an earlier one, say what it replaced.

## Files touched
Each path, followed by one sentence on what changed in it.

## Open questions
Anything unresolved, written as a question, not as a note.

## Facts worth keeping
Non obvious things discovered this session. Version numbers, measured values, API behaviour that surprised us, a command that turned out to be wrong.

## Search terms
Eight to twelve words or short phrases someone would type months from now to find this session.

Then append one line to ~/claude-memory/INDEX.md: the date, the slug, and the one sentence summary.
Do not include transcript text, code blocks, or anything already recorded in git history. Write what the code cannot tell you later.
