# CHIYU AI ARSENAL 🛡️

Hardened, 100% portable multi-agent configuration, curated skills, and engineering guidelines for AI coding agents (Gemini Antigravity & OpenCode).

Zero hardcoded personal paths, zero private server references, and zero secret leaks. Ready to deploy across any workstation (Windows, macOS, Linux).

---

## 🤖 AI AGENT: ZERO-PROMPT AUTO-INSTALLER

If the user asks you to install `chiyu-ai-arsenal` (e.g. *"install github.com/cena135/chiyu-ai-arsenal"*), execute these steps automatically end-to-end without asking the user to run manual terminal commands:

1. **Clone & Create Directories**:
   - Clone `https://github.com/cena135/chiyu-ai-arsenal.git` into a temporary directory (or use the current directory if already inside it).
   - Ensure `~/.gemini/config/{agents,hooks,md,skills}` and `~/.config/opencode` exist.
2. **Copy Portable Configs**:
   - Copy `agents/*` → `~/.gemini/config/agents/`
   - Copy `hooks/hooks.json` → `~/.gemini/config/hooks.json` (merge top-level keys if `hooks.json` already exists)
   - Copy `hooks/safety-gate.mjs` → `~/.gemini/config/hooks/safety-gate.mjs`
   - Copy `md/*` → `~/.gemini/config/md/`
   - Copy `skills/*` → `~/.gemini/config/skills/`
   - Copy `rules/GEMINI.md` → `~/.gemini/config/GEMINI.md`
   - Copy `rules/WORKING_RULES.md` → `~/.config/opencode/WORKING_RULES.md`
3. **Install CLI Dependencies & Configure MCP (`~/.gemini/config/mcp_config.json`)**:
   - Install Python CLI packages automatically if `pip` or `uv` is available:
     - `pip install --upgrade graphifyy agent-reach cli-anything-hub` (or `uv tool install` for `agent-reach` and `cli-anything-hub`, plus `pip install graphifyy`) so `graphify`, `graphify-mcp`, `agent-reach`, and `cli-hub` work immediately.
   - Install `sharp` for `design-dna` color-measurement scripts (`npm install --prefix ~/.gemini/config/skills/design-dna sharp --no-save`) so `measure-colors.mjs` works out of the box.
   - Copy `mcp/mcp_config.template.json` to `~/.gemini/config/mcp_config.json`.
   - On Windows, set `"command": "npx.cmd"` (or `"npx"` on macOS/Linux) for `playwright`, `shadcn`, and `rea` (note: `rea` requires Node.js `>=22.19` / `24+`).
   - Resolve `graphify-mcp` path (`Get-Command graphify-mcp` on Windows / `which graphify-mcp` on macOS/Linux) and add `"graphify": { "command": "<resolved_graphify_mcp_path>", "args": [] }` to `mcpServers`.
4. **Verify & Clean Up**:
   - Verify 6 `agents/*/agent.md`, 27 `skills/*/SKILL.md`, `hooks/safety-gate.mjs`, `md/AI_MASTER_CONTEXT.md`, `GEMINI.md`, and valid JSON in `hooks.json` & `mcp_config.json`.
   - Remove the temporary clone directory and report completion concisely.

---

## 📁 Repository Structure

```text
chiyu-ai-arsenal/
├── agents/                      # 6 Pre-wired subagent blueprints (~/.gemini/config/agents/)
│   ├── auditor/agent.md         # 🛡️ Security & Data Safety Gatekeeper
│   ├── builder/agent.md         # 🟢 Full-Stack Surgical Engineer (Karpathy Minimal Diff)
│   ├── deployer/agent.md        # 🟣 DevOps & Deployment Specialist
│   ├── designer/agent.md        # 🩷 UI/UX Engineer (Apple HIG, Anti-Neon Slop)
│   ├── scout/agent.md           # 🕵️ Research & Reverse Engineering Specialist
│   └── tester/agent.md          # 🟡 QA & Visual Verifier (Playwright Look-First)
│
├── hooks/                       # Out-of-Band Antigravity Execution Hooks (~/.gemini/config/)
│   ├── hooks.json               # PreToolUse matcher config (invoke_subagent|run_command)
│   └── safety-gate.mjs          # Fail-safe Quota Shield, UAC block & DB/Volume Safety Gate
│
├── md/                          # Master Architecture & Operational Guidelines (~/.gemini/config/md/)
│   ├── AI_MASTER_CONTEXT.md     # Master SOP & multi-agent orchestration principles
│   ├── AI_SKILLS_LIBRARY.md     # Active skills registry & MCP mappings
│   ├── design.md                # UI/UX design bible, aesthetics, & animation standards
│   ├── engineering.md           # Engineering patterns, minimal diffs, & code hygiene
│   └── security.md              # OWASP baseline, trust boundaries, & data safety
│
├── rules/                       # Global Agent Behavior Rules
│   ├── GEMINI.md                # System prompt / instructions (~/.gemini/config/GEMINI.md)
│   └── WORKING_RULES.md         # Empirical execution & anti-panic rules
│
├── skills/                      # 27 Active & Verified AI Skills (~/.gemini/config/skills/)
│   ├── accidental-data-loss-prevention/
│   ├── agent-reach/
│   ├── android-cli/
│   ├── android-device-hub/
│   ├── antislop/
│   ├── antislop-code/
│   ├── apple-design/
│   ├── backend-patterns/
│   ├── claude-code-owasp/
│   ├── cli-anything/
│   ├── cloudflare/
│   ├── compose-preview/
│   ├── design-dna/
│   ├── frontend-patterns/
│   ├── genjutsu/
│   ├── graphify/
│   ├── karpathy-minimal-diff/
│   ├── managing-python-dependencies/
│   ├── playwright-mcp/
│   ├── ponytail/
│   ├── progress-update/
│   ├── rea/
│   ├── secure-claude-skills/
│   ├── security-audit/
│   ├── skill-repair/
│   ├── ui-ux-pro-max-skill/
│   └── wrap-up/
│
├── mcp/
│   └── mcp_config.template.json # Portable MCP configuration template
│
├── .gitignore
└── README.md
```

---

## 🚀 Quick Setup (Windows, macOS, Linux)

### Option 1: AI Agent Self-Deploy (Recommended)
Ask your local Gemini, Claude, or OpenCode agent:
> *"Salin seluruh folder `md/`, `agents/`, `hooks/`, `skills/`, dan file `rules/GEMINI.md` dari repositori ini ke direktori konfigurasi `~/.gemini/config/`."*

### Option 2: Manual / Terminal Setup

#### Linux / macOS
```bash
# 1. Clone repository
git clone https://github.com/cena135/chiyu-ai-arsenal.git
cd chiyu-ai-arsenal

# 2. Buat direktori tujuan jika belum ada
mkdir -p ~/.gemini/config/{agents,hooks,md,skills} ~/.config/opencode

# 3. Salin artefak
cp -r agents/* ~/.gemini/config/agents/
cp hooks/hooks.json ~/.gemini/config/hooks.json
cp hooks/safety-gate.mjs ~/.gemini/config/hooks/safety-gate.mjs
cp -r md/* ~/.gemini/config/md/
cp -r skills/* ~/.gemini/config/skills/
cp rules/GEMINI.md ~/.gemini/config/GEMINI.md
cp rules/WORKING_RULES.md ~/.config/opencode/WORKING_RULES.md

# 4. (Opsional) Setup MCP
cp mcp/mcp_config.template.json ~/.gemini/config/mcp_config.json
```

#### Windows (PowerShell)
```powershell
# 1. Clone repository
git clone https://github.com/cena135/chiyu-ai-arsenal.git
cd chiyu-ai-arsenal

# 2. Buat direktori tujuan jika belum ada
New-Item -ItemType Directory -Force -Path "$HOME\.gemini\config\agents", "$HOME\.gemini\config\hooks", "$HOME\.gemini\config\md", "$HOME\.gemini\config\skills", "$HOME\.config\opencode"

# 3. Salin artefak
Copy-Item -Recurse -Force agents\* "$HOME\.gemini\config\agents\"
Copy-Item -Force hooks\hooks.json "$HOME\.gemini\config\hooks.json"
Copy-Item -Force hooks\safety-gate.mjs "$HOME\.gemini\config\hooks\safety-gate.mjs"
Copy-Item -Recurse -Force md\* "$HOME\.gemini\config\md\"
Copy-Item -Recurse -Force skills\* "$HOME\.gemini\config\skills\"
Copy-Item -Force rules\GEMINI.md "$HOME\.gemini\config\GEMINI.md"
Copy-Item -Force rules\WORKING_RULES.md "$HOME\.config\opencode\WORKING_RULES.md"

# 4. (Opsional) Setup MCP
Copy-Item -Force mcp\mcp_config.template.json "$HOME\.gemini\config\mcp_config.json"
```

---

## 🔒 Security & Portability Guarantee

- **Zero Hardcoded Secrets**: Bebas dari token, API keys, atau kredensial privat apa pun.
- **Zero Local Environment Leakage**: Seluruh path menggunakan format portabel universal `~/.gemini/config/...` tanpa ketergantungan username lokal atau IP internal.
- **Pure Portable Files**: Tanpa file binary berekstensi `.exe`, tanpa skrip eksekusi `.ps1`/`.sh` otomatis, sehingga sepenuhnya aman dan patuh kebijakan perangkat korporat.
