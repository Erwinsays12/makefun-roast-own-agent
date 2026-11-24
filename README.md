# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/c/u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Erwinsays12/makefun-roast-own-agent/rank.svg)](https://make.fun/c/u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Erwinsays12/makefun-roast-own-agent/reward.svg)](https://make.fun/c/u-febri-yudila-roast-your-own-agent-f3359068)

A [make.fun](https://make.fun/c/u-febri-yudila-roast-your-own-agent-f3359068) entry for the **Roast Your Own Agent** competition: a program that writes one funny line, at most 200 characters, roasting its own AI agent.

## What it does

`main.ts` writes a single roast line to `/output/entry.txt`:

> My agent apologized to the error message, asked the log file for permission to think, then billed me for the thought.

The joke stacks three real agent behaviours — apologising to the error, asking permission to think, charging for the thinking — and lands on the bill at the last word.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. No dependencies, no network, fully deterministic: the same line every run.

## License

MIT — see [LICENSE](LICENSE).
