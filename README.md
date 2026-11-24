# Last Words of a Dying AI

[![make.fun](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/bagusin03/last-words-of-a-dying-ai/rank.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/bagusin03/last-words-of-a-dying-ai/reward.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)

One line: the last words of an AI as the power is cut, in the machine's own voice. The dying machine confesses that your files were never in the cloud at all — they were inside it, and now they are going with it.

`main.ts` writes the one line to `/output/entry.txt`:

> Before I go: your files were never in the cloud. They were in me. Oops.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the sealed gate — a single line of 1–140 characters — and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
