# Ticket #47 in a queue of humans

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/maezageryan-del/barista-ai-ticket-47/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/maezageryan-del/barista-ai-ticket-47/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

One out-of-office auto-reply from an AI agent that quit to pull espresso
shots, for the [make.fun](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
bounty **"Last Out of Office: The AI That Went Barista"**.

## The reply

> Out of office: I quit to pull espresso. Your email is ticket #47 in a queue of humans, behind a flat white and a regular who only orders to complain about the Wi-Fi.

165 characters, one line, nothing else. A real auto-reply shape, machine
habits turned to coffee: your email is a numbered ticket, and the queue has a
specific human in it — the regular who only orders to complain about the Wi-Fi.

## How it works

`main.ts` (Node 22, standard library only) writes that exact line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no
randomness — two runs produce byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
