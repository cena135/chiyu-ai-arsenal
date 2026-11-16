---
name: antislop-code
description: "Code comment hygiene and functional completeness for AI coding agents: strip robotic AI-slop comments while preserving essential why-comments and docstrings."
---

# antislop-code

> Anti-AI-Slop for Code & Architecture: Comment Hygiene & Functional Completeness.
> Filter robotic, decorative, restating-the-obvious comments while preserving high-value technical context and guaranteeing zero dead handlers.

## 1. Core Principles & Scope Guardrail

- **Scope Guardrail:** Only modify comments when cleaning slop. Never touch executable code, variable names, imports, control flow, or business logic.
- **Why-Not-What Rule:** Code describes *what* is happening and *how*; comments exist exclusively to explain *why* (non-obvious constraints, domain logic, platform workarounds, security traps).
- **C-2 Functional Completeness (Haram Tombol / Handler Mati):**
  - Every button, form, interactive control, and event handler must be fully wired to real behavior.
  - **FORBIDDEN:** Empty handler stubs (`onClick={() => {}}`, `TODO: implement`), placeholder links (`href="#"`), empty catch blocks that swallow errors, or mock data disguised as working production features.
  - If a control cannot be implemented yet, remove it from the UI or display an explicit, visible label (e.g., `"Coming soon"`) with a clear tracking comment.

---

## 2. Comments That Add Nothing (Strip These)

### Decorative Separators
- **Tell:** Banner comments made of repeated characters, box drawing, or ALL CAPS section labels: `// =======================`, `// -------- WORKFLOW --------`, `/* ---- ROUTES ---- */`.
- **Why:** The decoration is visual noise signaling AI generation without adding information.
- **Fix:** Replace with a single plain line, or remove entirely if the code structure is already clear.

### Restating the Obvious
- **Tell:** Repeating what the declaration or next line already says: `let count = 0; // Initialize count`, `// User class` above `class User {}`, `function validateUser() // Validate user`.
- **Why:** Doubles reading load without adding knowledge.
- **Fix:** Remove completely.

### Workflow Narration
- **Tell:** Narrating execution step-by-step: `// Step 1: Validate input`, `// Step 2: Process request`, `// Finally return response`.
- **Why:** Control flow is visible in code. Numbered narration reads like a tutorial script, not engineering craft.
- **Fix:** Remove. If the flow is hard to follow, refactor code structure instead of adding narration.

### Empty Labels
- **Tell:** Generic category tags with zero facts: `// Main logic`, `// Core logic`, `// Helper function`, `// Note: This is important.`
- **Why:** Names a category, not a constraint or fact.
- **Fix:** Remove unless it provides a concrete technical fact (e.g., `// Retries only on 5xx status codes` earns its place).

### Vague Placeholders
- **Tell:** Speculative future promises: `// TODO: Improve this`, `// Optimization can be added here`, `// Needs refactoring`.
- **Why:** A vague TODO is noise naming a vague feeling rather than an actionable task.
- **Fix:** Remove, or replace with a concrete, actionable task citing the exact constraint.

### Signature Echo
- **Tell:** JSDoc / docstrings that only repeat parameter names: `@param price The price.` and `@returns Total price.`
- **Why:** Adds length without understanding.
- **Fix:** Remove redundant tags. Keep docstrings that explain business rules, edge cases, side effects, API contracts, or security caveats.

### Decorative Emoji
- **Tell:** Emoji in code comments: `// ✅ Validation`, `// 🚀 Performance`, `// 🔒 Secure route`.
- **Why:** AI default vocabulary and visual noise in production code.
- **Fix:** Replace with clean sentence-case text or remove.

### End Markers
- **Tell:** Marking the close of blocks: `} // end if`, `# End of function`, `// End processOrder`.
- **Why:** The closing bracket already ends the block.
- **Fix:** Remove.

---

## 3. How Comments Should Read

### The Over-Explained Comment
- **Tell:** Multi-line essay reciting version history, issue numbers, and obvious reasoning chains.
- **Why:** Engineers leave brief notes; AI generators write defensive paragraphs.
- **Fix:** Cut to the hard constraint alone: 1-2 lines maximum. Keep the trap or workaround; drop the essay.

### Line-by-Line Narration
- **Tell:** Commenting on every trivial line in sequence.
- **Why:** Burying important signals under noise.
- **Fix:** At most one concise comment per logical block, only if the block has non-obvious behavior. If self-explanatory, write zero comments.

### Stiff or Loud Wording
- **Tell:** Formal, bureaucratic phrasing or uppercase shouting: `// THIS FUNCTION IS RESPONSIBLE FOR...`
- **Why:** Sounds robotic.
- **Fix:** Natural developer voice, sentence case: `// Validate token before issuing session cookie.`

---

## 4. What Must Stay (Do Not Remove)

Never strip comments that explain:
1. **Business logic & intent:** Rules dictated by domain or regulations that look arbitrary in code.
2. **Security & Auth:** Trust boundaries, timing attack mitigations, CSRF/sanitization notes.
3. **Performance & Concurrency:** Race condition guards, cache invalidation rules, memory trade-offs.
4. **Protocols & External Contracts:** Third-party API quirks (e.g., `// Stripe may retry webhook for up to 3 days; deduplicate via event ID`).
5. **Workarounds & Platform Traps:** Browser bugs, OS-specific edge cases, upstream library patches.
6. **Assumptions & Edge Cases:** Non-obvious mathematical or structural boundaries.
7. **Licensing & Legal:** Copyright headers and third-party license notices.

*Rule of thumb:* Value is not length. State the trap or workaround in 1-2 tight lines.

---

## 5. Code Comment & Completeness Checklist

Verify before finishing any code task:
- [ ] Does every comment add information that the code does not already show?
- [ ] Are decorative banners, `===` dividers, and decorative emoji removed?
- [ ] Are redundant restatements of variable/function names stripped?
- [ ] Are step-by-step workflow narrations (`Step 1`, `Step 2`) removed?
- [ ] Are vague TODOs removed or made actionable with exact constraints?
- [ ] Is comment density at most one per logical block (not line-by-line)?
- [ ] Do remaining comments explain *why* (constraints, workarounds, security)?
- [ ] **C-2 Verified:** Are all buttons, inputs, handlers, and endpoints fully functional with zero dead code?
- [ ] Scope guardrail held: executable logic is untouched and working?
