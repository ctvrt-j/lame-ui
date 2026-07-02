# lame-ui — v0.1.0 TODO

Target: a small, durable set of primitives that cover the bare minimum for building a form + layout in a personal project. Every component follows the same shape: `forwardRef`, explicit props, CSS Module + token-driven styling, exported from `packages/ui/src/index.ts`.

Per-component sub-tasks (apply to every component below):
- `Component.tsx` — `forwardRef`, props interface, class composition
- `Component.module.css` — token-driven styles, variants, states (`:hover`, `:focus-visible`, `:disabled`)
- `index.ts` — re-export component + `ComponentProps` type
- Add to `packages/ui/src/index.ts` barrel
- Add a usage example in `apps/playground/src/App.tsx`

---

## Components

### Form primitives

- [ ] **Button** — `variant` (primary/secondary), `size` (sm/md/lg)
  - [x] `Button.tsx`
  - [x] `Button.module.css`
  - [x] `index.ts`
  - [x] Barrel export
  - [ ] Add `ghost` and `danger` variants
  - [ ] `loading` state (spinner + disabled)

- [ ] **Input** — text input with `size` and error state
  - [x] `Input.tsx` (extends `InputHTMLAttributes<HTMLInputElement>`)
  - [x] `Input.module.css`
  - [x] `index.ts`
  - [x] Barrel export
  - [ ] Playground example

- [ ] **Textarea**
  - [x] `Textarea.tsx` (extends `TextareaHTMLAttributes`)
  - [x] `Textarea.module.css`
  - [x] `index.ts`
  - [x] Barrel export
  - [ ] Playground example

- [ ] **Label** — pairs with form controls via `htmlFor`
  - [x] `Label.tsx`
  - [x] `Label.module.css`
  - [x] `index.ts`
  - [x] Barrel export
  - [ ] Playground example

- [ ] **Checkbox**
  - [x] `Checkbox.tsx`
  - [x] `Checkbox.module.css` (custom check via `::before`, keep native input for a11y)
  - [x] `index.ts`
  - [x] Barrel export
  - [x] Playground example
  - [ ] Final touches

- [ ] **Radio** + **RadioGroup**
  - [ ] `Radio.tsx`
  - [ ] `RadioGroup.tsx` (context for `name` + selected value)
  - [ ] `Radio.module.css`
  - [ ] `index.ts`
  - [ ] Barrel export
  - [ ] Playground example

- [ ] **Switch** — controlled toggle
  - [ ] `Switch.tsx`
  - [ ] `Switch.module.css`
  - [ ] `index.ts`
  - [ ] Barrel export
  - [ ] Playground example

### Layout primitives

- [ ] **Stack** — vertical/horizontal flex with `gap` token
  - [x] `Stack.tsx` 
  - [x] `Stack.module.css`
  - [x] `index.ts`
  - [x] Barrel export
  - [ ] Playground example

- [ ] **Grid** — CSS grid wrapper with `columns` + `gap` tokens
  - [x] `Grid.tsx` 
  - [x] `Grid.module.css`
  - [x] `index.ts`
  - [x] Barrel export
  - [ ] Playground example

- [ ] **Box** — minimal div wrapper with padding/margin token props
  - [x] `Box.tsx`
  - [x] `Box.module.css`
  - [x] `index.ts`
  - [x] Barrel export
  - [ ] Playground example

### Content primitives

- [ ] **Text** — `size`, `weight`, `tone` (muted/default/danger)
  - [x] `Text.tsx`
  - [x] `Text.module.css`
  - [x] `index.ts`
  - [x] Barrel export
  - [ ] Playground example

- [ ] **Heading** — `level` 1–6, decoupled from visual size
  - [x] `Heading.tsx`
  - [x] `Heading.module.css`
  - [x] `index.ts`
  - [x] Barrel export
  - [ ] Playground example

- [ ] **Card** — surface container
  - [ ] `Card.tsx`
  - [ ] `Card.module.css`
  - [ ] `index.ts`
  - [ ] Barrel export
  - [ ] Playground example

- [ ] **Badge** — small status pill
  - [ ] `Badge.tsx` (`tone`: neutral/success/warning/danger)
  - [ ] `Badge.module.css`
  - [ ] `index.ts`
  - [ ] Barrel export
  - [ ] Playground example

---

## Foundations

- [ ] **Tokens** — expand `packages/ui/src/tokens/tokens.css`
  - [ ] Color scale (neutrals + accent + semantic: success/warning/danger)
  - [ ] Spacing scale (`--lame-space-1` … `--lame-space-8`)
  - [ ] Radius scale
  - [ ] Typography scale (font sizes + line heights)
  - [ ] Shadow tokens
  - [ ] Focus ring token

- [ ] **Slot helper** — internal `Slot` component for an `asChild` pattern (add only when first needed by a component)

---

## Tooling

- [ ] **Vitest + Testing Library** wired up in `packages/ui`
  - [ ] Add deps, `vitest.config.ts`, `test` script
  - [ ] One smoke test per primitive (renders + forwards ref)

- [ ] **README.md** at repo root — install (workspace), token override snippet, component list

- [ ] **CHANGELOG.md** — manual entry for v0.1.0 (no Changesets per stack rules)

- [ ] **Tag `v0.1.0`** once the list above is green


## v0.2.0
- [ ] Paper
- [ ] Select
- [ ] Field
- [ ] ...