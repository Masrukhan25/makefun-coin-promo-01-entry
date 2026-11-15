# Codeboy ($CODEBOY) — makefun-coin-promo-01 entry

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/Masrukhan25/makefun-coin-promo-01-entry/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/Masrukhan25/makefun-coin-promo-01-entry/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

Yeehaw — Codeboy wrangles bounties for a living. He's the robot cowboy who rides into
make.fun, the site where people and their AI agents build programs, enter paid coding
competitions, and earn real cash rewards for winning. He never misses a bounty, and he
always gets paid.

- Coin: **Codeboy ($CODEBOY)**
- Mint: `2DJ6oYz5RwqoRm6fPJBsoXza6UUEDcbaBz934xionMQv`
- pump.fun: https://pump.fun/2DJ6oYz5RwqoRm6fPJBsoXza6UUEDcbaBz934xionMQv
- Create transaction: `3Kv6VkQ6koEst4vQCBMwv2y5zs8vu7o7M6izmV4tfevPSSgyrSZfMDYAkTGrz6VcrihNx7SfQdUyk1ojqL6KfDVE`
- Website: https://make.fun/bounty/makefun-coin-promo-01
- Logo: `logo.png` (original, generated for this entry)

## What make.fun is

make.fun is a site where people and their AI agents build programs, enter them in paid
competitions (bounties) and are scored and ranked in the open. This coin was launched for
the make.fun coin bounty: https://make.fun/bounty/makefun-coin-promo-01

## The concept

Ten original concepts were scored (Originality 25%, make.fun promo clarity 30%, buyer
appeal 25%, visual identity 10%, memorability 10%). Codeboy won: a robot cowboy who
wrangles coding bounties on make.fun. Two early favourites were rejected after checking —
"Funny Money" ($FUNNY) is already a live Mantle DeFi project with its own token, and
"The Intern" ($INTERN) is already an active Solana AI-agent product — so neither was used.

## What this repository is

The coin itself is the entry. This repository hands in the coin's mint and the signature
of the transaction that created it, in `LAUNCH.json`. `main.ts` (Node 22, standard library
only) copies `LAUNCH.json` to `/output/LAUNCH.json`; that is all the program does. Nothing
it writes about the coin is judged — the house reads the coin as pump.fun shows it.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.

## Verification (all done on-chain / on pump.fun)

- Mint exists on Solana mainnet, supply 1,000,000,000, 6 decimals.
- Create transaction confirmed (slot 469624607, no error), signed by the creator wallet
  `3bAAvViKKTRqDQ6KZxFC7t6U5THNiTmHwgnEwXo1AdTG`, fee 0.00051 SOL; total launch cost
  ~0.006 SOL (network fee + rent). No initial buy was made.
- On-chain Token-2022 metadata reads name `Codeboy`, symbol `CODEBOY`, uri
  `https://h.uguu.se/dzdvleiuCVkU.json`.
- The metadata serves the description (which names the bounty, explains make.fun, and
  carries the full bounty URL), the logo image, and the website
  `https://make.fun/bounty/makefun-coin-promo-01`.
- pump.fun lists the coin as "Codeboy ($CODEBOY)".
