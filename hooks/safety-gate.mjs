import fs from "node:fs";

const ALLOW = JSON.stringify({ decision: "allow" });

const DENY_PATTERNS = [
  /(?:^|[;&|\r\n])\s*(?:Start-Process\b[^\r\n;|]*-Verb\s+RunAs\b|New-Object\b[^\r\n;|]*-ComObject\s+["']?Shell\.Application)/i,
  /(?:^|[;&|\r\n])\s*docker(?:-compose|\s+compose)\s+down\b[^\r\n;|]*(?:\s-v\b|\s--volumes\b)/i,
  /(?:^|[;&|\r\n])\s*docker\s+(?:volume\s+(?:rm|prune)|system\s+prune)\b/i,
  /(?:^|[;&|\r\n])\s*(?:npx\s+|bunx\s+|pnpm\s+dlx\s+)?(?:prisma\s+(?:migrate\s+reset|db\s+push\b[^\r\n;|]*--force-reset)|drizzle-kit\s+drop)\b/i
];

function respond(payload) {
  process.stdout.write(JSON.stringify(payload) + "\n");
  process.exit(0);
}

try {
  const raw = fs.readFileSync(0, "utf8");
  if (!raw.trim()) {
    process.stdout.write(ALLOW + "\n");
    process.exit(0);
  }

  const input = JSON.parse(raw);
  const toolCall = input?.toolCall;

  if (toolCall?.name === "invoke_subagent") {
    const model = String(toolCall?.args?.Model ?? "").trim().toLowerCase();
    if (!model || model === "inherit" || model === "pro") {
      respond({
        decision: "deny",
        reason: "Argon/Pro Quota Shield (Out-of-Band Hook): invoke_subagent wajib menyertakan Model: 'flash' atau 'flash_lite' (haram 'pro' atau 'inherit')."
      });
    }
  }

  if (toolCall?.name === "run_command") {
    const cmd = String(toolCall?.args?.CommandLine ?? "");
    if (DENY_PATTERNS.some((re) => re.test(cmd))) {
      respond({
        decision: "deny",
        reason: "Chiyu Zero-Trust Safety Gate (Out-of-Band Hook): Perintah destruktif volume/DB atau elevasi UAC diblokir. Wajib audit isolasi & izin eksplisit CEO."
      });
    }
  }

  process.stdout.write(ALLOW + "\n");
  process.exit(0);
} catch {
  // Fail-safe: malformed hook stdin must never block normal tool execution.
  process.stdout.write(ALLOW + "\n");
  process.exit(0);
}
