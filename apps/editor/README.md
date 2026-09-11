# ShadCN Token Studio

A small React workspace for browsing ShadCN-style component states and editing the semantic tokens that drive them.

```bash
pnpm --filter @shadcn/editor dev
```

All component previews consume the semantic color, radius, spacing, and linked size variables defined by the editor. Size tokens are shared across components so `sm`, `default`, and `lg` stay consistent.
