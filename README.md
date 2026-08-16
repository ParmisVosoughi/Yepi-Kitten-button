# Yepi Kitten Button

Click the button and a kitten jumps out, lands, and vanishes a few seconds later.

This repo has three self-contained implementations of the same interaction, each with its own button design:

| Folder | Style |
| --- | --- |
| [`button-style-1`](./button-style-1) | Neon liquid gradient button |
| [`button-style-2`](./button-style-2) | Keycap-style button |
| [`button-style-3`](./button-style-3) | Snake-border glow button |

The kitten animation — the jump, the landing squash, the timed disappearance — is identical across all three; only the button itself changes.

## How it works

Each style is a small [TanStack Start](https://tanstack.com/start) + React app. Clicking the button renders the kitten GIF absolutely positioned beneath it and plays a CSS keyframe animation that jumps it out, lands it with a squash/stretch bounce, then fades it out after 5 seconds. Clicking again while the kitten is still visible restarts the animation.

## Running a style locally

Each folder is an independent project — pick one and run it from inside that folder:

```sh
cd button-style-1   # or button-style-2, button-style-3
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production build, and `npm run preview` serves it locally.

## Requirements

- Node.js 20+
- npm (or bun, since a `bun.lock` is included)

## Customization

The click target, kitten size, and how long it stays on screen are the exposed options on the `CatCoolMode` component (`src/components/CatCoolMode.tsx` in each folder):

```tsx
<CatCoolMode label="Click Me" catSize={150} />
```

The button's own look (colors, gradients, animation timing) lives in each folder's `src/styles.css`.

## Attribution

The button designs are adapted from MIT-licensed [uiverse.io](https://uiverse.io) components:

- Style 1 — [breezy-zebra-94](https://uiverse.io/dexter-st/breezy-zebra-94) by dexter-st
- Style 2 — [purple-rattlesnake-49](https://uiverse.io/20essentials/purple-rattlesnake-49) by 20essentials
- Style 3 — [spotty-snake-82](https://uiverse.io/FColombati/spotty-snake-82) by FColombati

## License

MIT — see [LICENSE](./LICENSE).
