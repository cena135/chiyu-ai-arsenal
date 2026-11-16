---
name: graphify
description: "Codebase/content questions via knowledge graph (god nodes, communities, query/path/explain) — treat as graphify query first when graphify-out/ exists. Turns code, docs, papers, images, video into a persistent queryable graph."
---

# Graphify (compact)

Folder apa pun → knowledge graph di `graphify-out/` (HTML interaktif + GraphRAG JSON + GRAPH_REPORT.md). Full docs: `SKILL-full.md` (baca on-demand bila perlu detail).

## Fast path
`graphify-out/graph.json` ada di project root + pertanyaan = natural-language (bukan rebuild) → **langsung query**, jangan rebuild, jangan tanya user narik.

## MCP tools (server: `python -m graphify.serve`)
`get_node(label)` · `graph_stats()` · `god_nodes(top_n)` · `get_community(id)` — opsional `project_path`. Query/explain/path via CLI.

## CLI
- `graphify <path>` — build graph
- `graphify query "<question>"` — jawab dari graph
- `graphify explain "<node>"` — penjelasan plain-language
- flags: `--neo4j` / `--falkordb` (cypher.txt) · `--mcp` · `--wiki` (index.md + artikel per community)
- Python: cek uv/pipx venv `graphifyy` dulu (detail detect di SKILL-full.md)
