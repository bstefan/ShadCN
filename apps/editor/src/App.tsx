import { type CSSProperties, type ReactNode, useEffect, useMemo, useState } from "react"

type IconName =
  | "arrow"
  | "button"
  | "check"
  | "chevron"
  | "clipboard"
  | "close"
  | "field"
  | "moon"
  | "reset"
  | "search"
  | "select"
  | "shape"
  | "sun"
  | "undo"
  | "redo"

function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    button: <rect x="3" y="7" width="18" height="10" rx="3" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5V3h6v1.5M9 9h6m-6 4h6m-6 4h4" /></>,
    close: <><path d="m7 7 10 10M17 7 7 17" /></>,
    field: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 10h5" /></>,
    moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />,
    reset: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    select: <><rect x="4" y="5" width="16" height="14" rx="2" /><path d="m15 10 2 2-2 2" /></>,
    shape: <><circle cx="8" cy="8" r="4" /><rect x="12" y="12" width="8" height="8" rx="2" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    undo: <><path d="M9 7 4 12l5 5" /><path d="M4 12h9a6 6 0 0 1 6 6" /></>,
    redo: <><path d="m15 7 5 5-5 5" /><path d="M20 12h-9a6 6 0 0 0-6 6" /></>,
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

type ComponentId = string

const componentGroups: { label: string; items: { id: ComponentId; label: string; icon: IconName }[] }[] = [
  { label: "Actions", items: [
    { id: "button", label: "Button", icon: "button" }, { id: "button-group", label: "Button Group", icon: "button" }, { id: "toggle", label: "Toggle", icon: "button" }, { id: "toggle-group", label: "Toggle Group", icon: "button" },
  ] },
  { label: "Form controls", items: [
    { id: "checkbox", label: "Checkbox", icon: "check" }, { id: "combobox", label: "Combobox", icon: "select" }, { id: "field", label: "Field", icon: "field" }, { id: "form", label: "Form", icon: "clipboard" }, { id: "input", label: "Input", icon: "field" }, { id: "input-group", label: "Input Group", icon: "field" }, { id: "input-otp", label: "Input OTP", icon: "field" }, { id: "label", label: "Label", icon: "field" }, { id: "native-select", label: "Native Select", icon: "select" }, { id: "radio-group", label: "Radio Group", icon: "shape" }, { id: "select", label: "Select", icon: "select" }, { id: "slider", label: "Slider", icon: "shape" }, { id: "switch", label: "Switch", icon: "shape" }, { id: "textarea", label: "Textarea", icon: "field" },
  ] },
  { label: "Navigation", items: [
    { id: "breadcrumb", label: "Breadcrumb", icon: "chevron" }, { id: "command", label: "Command", icon: "search" }, { id: "dropdown-menu", label: "Dropdown Menu", icon: "select" }, { id: "menubar", label: "Menubar", icon: "select" }, { id: "navigation-menu", label: "Navigation Menu", icon: "select" }, { id: "pagination", label: "Pagination", icon: "chevron" }, { id: "sidebar", label: "Sidebar", icon: "clipboard" }, { id: "tabs", label: "Tabs", icon: "button" },
  ] },
  { label: "Overlays", items: [
    { id: "alert-dialog", label: "Alert Dialog", icon: "shape" }, { id: "context-menu", label: "Context Menu", icon: "select" }, { id: "dialog", label: "Dialog", icon: "shape" }, { id: "drawer", label: "Drawer", icon: "shape" }, { id: "hover-card", label: "Hover Card", icon: "clipboard" }, { id: "popover", label: "Popover", icon: "shape" }, { id: "sheet", label: "Sheet", icon: "shape" }, { id: "tooltip", label: "Tooltip", icon: "shape" },
  ] },
  { label: "Data display", items: [
    { id: "accordion", label: "Accordion", icon: "chevron" }, { id: "alert", label: "Alert", icon: "shape" }, { id: "aspect-ratio", label: "Aspect Ratio", icon: "shape" }, { id: "attachment", label: "Attachment", icon: "clipboard" }, { id: "avatar", label: "Avatar", icon: "shape" }, { id: "badge", label: "Badge", icon: "shape" }, { id: "bubble", label: "Bubble", icon: "shape" }, { id: "calendar", label: "Calendar", icon: "clipboard" }, { id: "card", label: "Card", icon: "clipboard" }, { id: "carousel", label: "Carousel", icon: "shape" }, { id: "chart", label: "Chart", icon: "shape" }, { id: "collapsible", label: "Collapsible", icon: "chevron" }, { id: "direction", label: "Direction", icon: "arrow" }, { id: "empty", label: "Empty", icon: "shape" }, { id: "item", label: "Item", icon: "clipboard" }, { id: "kbd", label: "Kbd", icon: "button" }, { id: "marker", label: "Marker", icon: "shape" }, { id: "message", label: "Message", icon: "shape" }, { id: "message-scroller", label: "Message Scroller", icon: "shape" }, { id: "progress", label: "Progress", icon: "shape" }, { id: "resizable", label: "Resizable", icon: "shape" }, { id: "scroll-area", label: "Scroll Area", icon: "shape" }, { id: "separator", label: "Separator", icon: "shape" }, { id: "skeleton", label: "Skeleton", icon: "shape" }, { id: "sonner", label: "Sonner", icon: "shape" }, { id: "spinner", label: "Spinner", icon: "shape" }, { id: "table", label: "Table", icon: "clipboard" },
  ] },
]

const allItems = componentGroups.flatMap((group) => group.items)
type SizeId = "sm" | "md" | "lg"
type Mode = "light" | "dark"
type SpacingToken = "none" | "xs" | "sm" | "md" | "lg" | "xl"
type RadiusToken = "none" | "sm" | "md" | "lg" | "xl" | "full"
type HeightToken = "sm" | "md" | "lg" | "xl"
type FontToken = "xs" | "sm" | "md" | "lg"
type ColorToken = "background" | "foreground" | "card" | "primary" | "primaryForeground" | "secondary" | "muted" | "mutedForeground" | "border" | "destructive" | "ring"

type DetailTokens = {
  spacing: Record<SpacingToken, number>
  radius: Record<RadiusToken, number>
  height: Record<HeightToken, number>
  font: Record<FontToken, number>
}

type ComponentOverride = {
  height: HeightToken
  padding: SpacingToken
  gap: SpacingToken
  font: FontToken
  radius: RadiusToken
  colors: { surface: ColorToken; text: ColorToken; accent: ColorToken; accentText: ColorToken; border: ColorToken }
}

const defaultDetailTokens: DetailTokens = {
  spacing: { none: 0, xs: 4, sm: 8, md: 12, lg: 16, xl: 24 },
  radius: { none: 0, sm: 4, md: 8, lg: 12, xl: 16, full: 999 },
  height: { sm: 32, md: 36, lg: 40, xl: 48 },
  font: { xs: 12, sm: 13, md: 14, lg: 16 },
}

type Tokens = {
  background: string
  foreground: string
  card: string
  primary: string
  primaryForeground: string
  secondary: string
  muted: string
  mutedForeground: string
  border: string
  destructive: string
  ring: string
  radius: number
  density: number
  size: Record<SizeId, { height: number; padding: number; gap: number; font: number }>
}

const lightTokens: Tokens = {
  background: "#ffffff", foreground: "#171717", card: "#ffffff", primary: "#18181b", primaryForeground: "#fafafa", secondary: "#f4f4f5", muted: "#f4f4f5", mutedForeground: "#71717a", border: "#e4e4e7", destructive: "#dc2626", ring: "#a1a1aa", radius: 8, density: 16,
  size: { sm: { height: 32, padding: 12, gap: 6, font: 13 }, md: { height: 36, padding: 16, gap: 8, font: 14 }, lg: { height: 40, padding: 20, gap: 10, font: 14 } },
}

const darkTokens: Tokens = {
  ...lightTokens, background: "#09090b", foreground: "#fafafa", card: "#18181b", primary: "#fafafa", primaryForeground: "#18181b", secondary: "#27272a", muted: "#27272a", mutedForeground: "#a1a1aa", border: "#3f3f46", destructive: "#ef4444", ring: "#d4d4d8",
}

type EditorState = {
  tokensByMode: Record<Mode, Tokens>
  detailTokens: DetailTokens
  componentOverrides: Record<ComponentId, Partial<Record<SizeId, ComponentOverride>>>
}

const defaultEditorState: EditorState = {
  tokensByMode: { light: lightTokens, dark: darkTokens },
  detailTokens: defaultDetailTokens,
  componentOverrides: {},
}

const storageKey = "shadcn-studio-design-v2"

type SavedWorkspace = { design: EditorState; history: { past: EditorState[]; future: EditorState[] } }

function loadWorkspace(): SavedWorkspace {
  try {
    const saved = localStorage.getItem(storageKey)
    if (!saved) return { design: defaultEditorState, history: { past: [], future: [] } }
    const parsed = JSON.parse(saved)
    if (parsed.design) return { design: { ...defaultEditorState, ...parsed.design }, history: parsed.history ?? { past: [], future: [] } }
    return { design: { ...defaultEditorState, ...parsed }, history: { past: [], future: [] } }
  } catch {
    return { design: defaultEditorState, history: { past: [], future: [] } }
  }
}

const colorControls: { key: keyof Tokens; label: string }[] = [
  { key: "background", label: "Background" }, { key: "foreground", label: "Foreground" }, { key: "card", label: "Card" }, { key: "primary", label: "Primary" }, { key: "primaryForeground", label: "Primary foreground" }, { key: "secondary", label: "Secondary" }, { key: "muted", label: "Muted" }, { key: "mutedForeground", label: "Muted foreground" }, { key: "border", label: "Border" }, { key: "destructive", label: "Destructive" }, { key: "ring", label: "Ring" },
]

function tokenStyle(tokens: Tokens, details: DetailTokens): CSSProperties {
  return {
    "--background": tokens.background, "--foreground": tokens.foreground, "--card": tokens.card, "--primary": tokens.primary, "--primary-foreground": tokens.primaryForeground, "--secondary": tokens.secondary, "--muted": tokens.muted, "--muted-foreground": tokens.mutedForeground, "--border": tokens.border, "--destructive": tokens.destructive, "--ring": tokens.ring, "--radius": `${details.radius.md}px`, "--space": `${details.spacing.lg}px`,
    "--control-sm-height": `${details.height.sm}px`, "--control-sm-px": `${details.spacing.md}px`, "--control-sm-gap": `${details.spacing.xs}px`, "--control-sm-font": `${details.font.sm}px`,
    "--control-md-height": `${details.height.md}px`, "--control-md-px": `${details.spacing.lg}px`, "--control-md-gap": `${details.spacing.sm}px`, "--control-md-font": `${details.font.md}px`,
    "--control-lg-height": `${details.height.lg}px`, "--control-lg-px": `${details.spacing.xl}px`, "--control-lg-gap": `${details.spacing.md}px`, "--control-lg-font": `${details.font.md}px`,
  } as CSSProperties
}

function componentStyle(override: ComponentOverride | undefined, size: SizeId, tokens: Tokens, details: DetailTokens): CSSProperties | undefined {
  if (!override) return undefined
  const colors = override.colors
  return {
    [`--control-${size}-height`]: `${details.height[override.height]}px`, [`--control-${size}-px`]: `${details.spacing[override.padding]}px`, [`--control-${size}-gap`]: `${details.spacing[override.gap]}px`, [`--control-${size}-font`]: `${details.font[override.font]}px`, "--radius": `${details.radius[override.radius]}px`,
    "--background": tokens[colors.surface], "--card": tokens[colors.surface], "--foreground": tokens[colors.text], "--primary": tokens[colors.accent], "--primary-foreground": tokens[colors.accentText], "--border": tokens[colors.border],
  } as CSSProperties
}

const explicitStates: Record<string, string[]> = {
  button: ["Default", "Hover", "Focus", "Pressed", "Disabled"],
  input: ["Default", "Hover", "Focus", "Filled", "Invalid", "Disabled"],
  checkbox: ["Unchecked", "Hover", "Focus", "Checked", "Indeterminate", "Disabled"],
  select: ["Placeholder", "Hover", "Focus", "Open", "Selected", "Invalid", "Disabled"],
  badge: ["Default", "Secondary", "Outline", "Destructive"],
  card: ["Default", "Hover", "Selected", "Disabled"],
  alert: ["Default", "Destructive", "With action"],
}

const overlayComponents = new Set(["alert-dialog", "context-menu", "dialog", "drawer", "dropdown-menu", "hover-card", "popover", "sheet", "tooltip"])
const formComponents = new Set(["button-group", "combobox", "field", "form", "input-group", "input-otp", "native-select", "radio-group", "slider", "switch", "textarea", "toggle", "toggle-group"])
const disclosureComponents = new Set(["accordion", "collapsible", "command", "menubar", "navigation-menu", "sidebar", "tabs"])

function statesForComponent(component: ComponentId) {
  if (explicitStates[component]) return explicitStates[component]
  if (overlayComponents.has(component)) return ["Closed", "Hover", "Open", "Focus"]
  if (formComponents.has(component)) return ["Default", "Hover", "Focus", "Active", "Disabled"]
  if (disclosureComponents.has(component)) return ["Collapsed", "Hover", "Expanded", "Focus"]
  if (["progress", "skeleton", "spinner", "sonner"].includes(component)) return ["Default", "Loading", "Complete", "Error"]
  return ["Default", "Hover", "Selected", "Disabled"]
}

function PreviewComponent({ component, state, size }: { component: ComponentId; state: string; size: SizeId }) {
  const stateKey = state.toLowerCase().replace(" ", "-")
  if (component === "button") return <button className="ui-button" data-size={size} data-state={stateKey} disabled={state === "Disabled"}>{state === "Pressed" ? "Saving…" : "Continue"}<Icon name="arrow" size={14} /></button>
  if (component === "input") return <div className="ui-input" data-size={size} data-state={stateKey}><span>{state === "Filled" ? "hello@studio.co" : state === "Invalid" ? "not-an-email" : "Email address"}</span></div>
  if (component === "checkbox") return <div className="check-wrap"><span className="ui-checkbox" data-size={size} data-state={stateKey}>{state === "Checked" && <Icon name="check" size={12} />}{state === "Indeterminate" && <span className="minus" />}</span><span>Accept terms</span></div>
  if (component === "select") return <div className="ui-select" data-size={size} data-state={stateKey}><span>{state === "Selected" ? "Design systems" : "Select a workspace"}</span><span className="select-chevrons">⌃<br />⌄</span></div>
  if (component === "badge") return <span className="ui-badge" data-size={size} data-state={stateKey}>{state}</span>
  if (component === "card") return <div className="ui-card" data-size={size} data-state={stateKey}><div className="card-icon"><Icon name="shape" /></div><div><strong>Design system</strong><span>12 components updated</span></div><Icon name="chevron" /></div>
  if (component === "alert") return <div className="ui-alert" data-size={size} data-state={stateKey}><div className="alert-mark">!</div><div><strong>{state === "Destructive" ? "Something went wrong" : "Heads up"}</strong><span>Your token changes are ready to preview.</span></div>{state === "With action" && <button>Review</button>}</div>
  if (["switch", "toggle", "toggle-group"].includes(component)) return <div className="demo-inline"><span className="ui-switch" data-size={size} data-state={stateKey}><span /></span><span>{component === "switch" ? "Notifications" : "Toggle option"}</span></div>
  if (component === "slider" || component === "progress") return <div className="ui-track" data-size={size} data-state={stateKey}><span style={{ width: state === "Complete" ? "100%" : state === "Error" ? "72%" : "54%" }} /><i /></div>
  if (component === "textarea") return <div className="ui-textarea" data-size={size} data-state={stateKey}>Write a message…</div>
  if (component === "radio-group") return <div className="demo-stack"><div className="demo-inline"><span className="ui-radio selected" /><span>Comfortable</span></div><div className="demo-inline"><span className="ui-radio" /><span>Compact</span></div></div>
  if (component === "input-otp") return <div className="otp-row" data-size={size} data-state={stateKey}>{["4", "8", "", ""].map((value, index) => <span key={index}>{value || "·"}</span>)}</div>
  if (["button-group", "pagination"].includes(component)) return <div className="button-row" data-size={size} data-state={stateKey}><button>←</button><button className="current">1</button><button>2</button><button>→</button></div>
  if (["accordion", "collapsible"].includes(component)) return <div className="ui-disclosure" data-size={size} data-state={stateKey}><div><strong>Is it accessible?</strong><span>{state === "Expanded" ? "Yes. It follows the WAI-ARIA pattern." : ""}</span></div><span>⌄</span></div>
  if (["combobox", "command", "context-menu", "dropdown-menu", "menubar", "native-select", "navigation-menu"].includes(component)) return <div className="ui-menu" data-size={size} data-state={stateKey}><div><Icon name="search" size={12} /><span>{component === "command" ? "Type a command…" : "Choose an option"}</span></div>{["Open", "Expanded", "Active"].includes(state) && <ul><li>New project <kbd>⌘N</kbd></li><li className="selected">Design system</li><li>Settings</li></ul>}</div>
  if (overlayComponents.has(component)) return <div className="ui-overlay-demo" data-size={size} data-state={stateKey}><button>{state === "Closed" ? "Open" : state}</button>{["Open", "Focus"].includes(state) && <div><strong>{component.replace("-", " ")}</strong><span>Token-driven surface content.</span><button>Continue</button></div>}</div>
  if (component === "tabs") return <div className="ui-tabs" data-size={size} data-state={stateKey}><div><span className="active">Account</span><span>Password</span><span>Team</span></div><p>Manage your account preferences.</p></div>
  if (component === "breadcrumb") return <div className="ui-breadcrumb" data-size={size} data-state={stateKey}><span>Home</span><b>/</b><span>Components</span><b>/</b><strong>Editor</strong></div>
  if (component === "table") return <div className="ui-table" data-size={size} data-state={stateKey}><div><strong>Name</strong><strong>Status</strong></div><div><span>Button</span><span>Ready</span></div><div><span>Dialog</span><span>Draft</span></div></div>
  if (component === "chart") return <div className="ui-chart" data-size={size} data-state={stateKey}>{[38, 62, 46, 82, 68].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div>
  if (component === "calendar") return <div className="ui-calendar" data-size={size} data-state={stateKey}>{["M", "T", "W", "T", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((day, index) => <span className={day === "6" ? "selected" : ""} key={index}>{day}</span>)}</div>
  if (component === "skeleton") return <div className="ui-skeleton" data-size={size}><i /><div><span /><span /></div></div>
  if (component === "spinner") return <div className="ui-spinner" data-size={size} data-state={stateKey} />
  if (component === "separator") return <div className="ui-separator" data-state={stateKey} />
  if (component === "avatar") return <div className="ui-avatar" data-size={size} data-state={stateKey}>SC</div>
  if (component === "kbd") return <kbd className="ui-kbd" data-size={size} data-state={stateKey}>⌘ K</kbd>
  return <div className="ui-generic" data-size={size} data-state={stateKey}><span className="generic-icon"><Icon name={component === "direction" ? "arrow" : "shape"} /></span><div><strong>{allItems.find((item) => item.id === component)?.label}</strong><span>{state} preview</span></div>{!['aspect-ratio', 'marker'].includes(component) && <Icon name="chevron" size={13} />}</div>
}

function Slider({ label, value, min, max, suffix = "px", onChange }: { label: string; value: number; min: number; max: number; suffix?: string; onChange: (value: number) => void }) {
  return <label className="slider-control"><span><span>{label}</span><output>{value}{suffix}</output></span><input type="range" min={min} max={max} value={value} onChange={(event) => onChange(Number(event.target.value))} /></label>
}

function TokenSelect<T extends string>({ label, value, options, onChange }: { label: string; value: T; options: { value: T; label: string }[]; onChange: (value: T) => void }) {
  return <label className="token-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value as T)}>{options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></label>
}

function App() {
  const [initialWorkspace] = useState(loadWorkspace)
  const [component, setComponent] = useState<ComponentId>("button")
  const [mode, setMode] = useState<Mode>("light")
  const [design, setDesign] = useState<EditorState>(initialWorkspace.design)
  const [history, setHistory] = useState<{ past: EditorState[]; future: EditorState[] }>(initialWorkspace.history)
  const [editorTab, setEditorTab] = useState<"theme" | "sizes" | "component">("theme")
  const [activeSize, setActiveSize] = useState<SizeId>("md")
  const [copied, setCopied] = useState(false)
  const [query, setQuery] = useState("")
  const { tokensByMode, componentOverrides, detailTokens } = design
  const tokens = tokensByMode[mode]
  const selectedItem = allItems.find((item) => item.id === component)!
  const activeOverride = componentOverrides[component]?.[activeSize]
  const filteredGroups = componentGroups.map((group) => ({ ...group, items: group.items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())) })).filter((group) => group.items.length)

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ design, history }))
  }, [design, history])

  const applyChange = (recipe: (current: EditorState) => EditorState) => {
    const next = recipe(design)
    if (JSON.stringify(next) === JSON.stringify(design)) return
    setHistory((current) => ({ past: [...current.past, design].slice(-10), future: [] }))
    setDesign(next)
  }

  const undo = () => {
    const previous = history.past.at(-1)
    if (!previous) return
    setHistory({ past: history.past.slice(0, -1), future: [design, ...history.future].slice(0, 10) })
    setDesign(previous)
  }

  const redo = () => {
    const next = history.future[0]
    if (!next) return
    setHistory({ past: [...history.past, design].slice(-10), future: history.future.slice(1) })
    setDesign(next)
  }

  const cssExport = useMemo(() => {
    const tokenDefinitions = [
      ...Object.entries(detailTokens.spacing).map(([key, value]) => `  --spacing-${key}: ${value}px;`),
      ...Object.entries(detailTokens.radius).map(([key, value]) => `  --radius-${key}: ${value}px;`),
      ...Object.entries(detailTokens.height).map(([key, value]) => `  --height-${key}: ${value}px;`),
      ...Object.entries(detailTokens.font).map(([key, value]) => `  --font-${key}: ${value}px;`),
    ].join("\n")
    const overrides = Object.entries(componentOverrides).flatMap(([componentId, sizes]) => (Object.entries(sizes) as [SizeId, ComponentOverride][]).map(([size, override]) => {
      const selector = `[data-component="${componentId}"][data-size="${size}"]`
      return `${selector} {\n  --control-${size}-height: var(--height-${override.height});\n  --control-${size}-px: var(--spacing-${override.padding});\n  --control-${size}-gap: var(--spacing-${override.gap});\n  --control-${size}-font: var(--font-${override.font});\n  --radius: var(--radius-${override.radius});\n  --background: var(--${override.colors.surface.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)});\n  --card: var(--${override.colors.surface.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)});\n  --foreground: var(--${override.colors.text.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)});\n  --primary: var(--${override.colors.accent.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)});\n  --primary-foreground: var(--${override.colors.accentText.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)});\n  --border: var(--${override.colors.border.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)});\n}`
    })).join("\n\n")
    return `:root {\n${colorControls.map(({ key }) => `  --${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}: ${tokens[key]};`).join("\n")}\n${tokenDefinitions}\n}${overrides ? `\n\n${overrides}` : ""}`
  }, [componentOverrides, detailTokens, tokens])

  const updateToken = <K extends keyof Tokens>(key: K, value: Tokens[K]) => applyChange((current) => ({ ...current, tokensByMode: { ...current.tokensByMode, [mode]: { ...current.tokensByMode[mode], [key]: value } } }))
  const updateDetailToken = <G extends keyof DetailTokens>(group: G, key: keyof DetailTokens[G], value: number) => applyChange((current) => ({ ...current, detailTokens: { ...current.detailTokens, [group]: { ...current.detailTokens[group], [key]: value } } }))
  const createOverride = () => applyChange((current) => ({ ...current, componentOverrides: { ...current.componentOverrides, [component]: { ...current.componentOverrides[component], [activeSize]: {
    height: activeSize, padding: activeSize === "sm" ? "md" : activeSize === "md" ? "lg" : "xl", gap: activeSize === "sm" ? "xs" : activeSize === "md" ? "sm" : "md", font: activeSize === "sm" ? "sm" : "md", radius: "md",
    colors: { surface: "background", text: "foreground", accent: "primary", accentText: "primaryForeground", border: "border" },
  } } } }))
  const removeOverride = () => applyChange((current) => {
    const nextForComponent = { ...current.componentOverrides[component] }
    delete nextForComponent[activeSize]
    return { ...current, componentOverrides: { ...current.componentOverrides, [component]: nextForComponent } }
  })
  const updateOverrideToken = <K extends "height" | "padding" | "gap" | "font" | "radius">(key: K, value: ComponentOverride[K]) => applyChange((current) => ({ ...current, componentOverrides: { ...current.componentOverrides, [component]: { ...current.componentOverrides[component], [activeSize]: { ...current.componentOverrides[component]?.[activeSize]!, [key]: value } } } }))
  const updateOverrideColor = (key: "surface" | "text" | "accent" | "accentText" | "border", value: ColorToken) => applyChange((current) => {
    const override = current.componentOverrides[component]?.[activeSize]!
    return { ...current, componentOverrides: { ...current.componentOverrides, [component]: { ...current.componentOverrides[component], [activeSize]: { ...override, colors: { ...override.colors, [key]: value } } } } }
  })
  const reset = () => applyChange(() => defaultEditorState)
  const copyCss = async () => { await navigator.clipboard.writeText(cssExport); setCopied(true); window.setTimeout(() => setCopied(false), 1400) }

  return (
    <main className="studio-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-mark"><span /></span><span>ShadCN <b>Studio</b></span></div>
        <div className="topbar-center"><span className="status-dot" />All changes saved locally</div>
        <div className="topbar-actions">
          <button className="icon-button" onClick={() => setMode(mode === "light" ? "dark" : "light")} aria-label={`Use ${mode === "light" ? "dark" : "light"} preview`}><Icon name={mode === "light" ? "moon" : "sun"} /></button>
          <button className="export-button" onClick={copyCss}><Icon name={copied ? "check" : "clipboard"} />{copied ? "Copied" : "Copy CSS"}</button>
        </div>
      </header>

      <aside className="component-nav">
        <div className="search-box"><Icon name="search" /><input aria-label="Search components" placeholder="Search 61 components" value={query} onChange={(event) => setQuery(event.target.value)} /></div>
        <nav>
          {filteredGroups.map((group) => <section key={group.label}><h2>{group.label}</h2>{group.items.map((item) => <button key={item.id} className={component === item.id ? "active" : ""} onClick={() => setComponent(item.id)}><Icon name={item.icon} /><span>{item.label}</span><span className="nav-arrow">›</span></button>)}</section>)}
          {!filteredGroups.length && <div className="no-results">No components found.</div>}
        </nav>
        <div className="nav-note"><span>{allItems.length}</span><p><strong>Components</strong>Complete bundled registry.</p></div>
      </aside>

      <section className="preview-area" style={tokenStyle(tokens, detailTokens)} data-theme={mode}>
        <div className="preview-heading"><div><span className="eyebrow">COMPONENT / {selectedItem.label.toUpperCase()}</span><h1>{selectedItem.label}</h1><p>Inspect every state. Adjust its shared tokens from the sidebar.</p></div><div className="mode-pill"><span className={mode === "light" ? "active" : ""}>Light</span><span className={mode === "dark" ? "active" : ""}>Dark</span></div></div>
        <div className="preview-grid">
          {(["sm", "md", "lg"] as SizeId[]).map((size) => { const override = componentOverrides[component]?.[size]; return <div className="size-column" key={size}><div className="size-title"><span>{size === "md" ? "Default" : size.toUpperCase()}{override && <b>Custom</b>}</span><button onClick={() => { setActiveSize(size); setEditorTab("component") }}>Edit {size}<Icon name="arrow" size={13} /></button></div>{statesForComponent(component).map((state) => <div className="state-row" key={state}><span className="state-label">{state}</span><div className="component-stage" data-component={component} data-size={size} style={componentStyle(override, size, tokens, detailTokens)}><PreviewComponent component={component} state={state} size={size} /></div></div>)}</div> })}
        </div>
        <div className="token-footnote"><span className="link-node" /><span className="link-line" /><p><strong>Size-linked variants</strong>All {activeSize} components share height, padding, gap and type tokens.</p></div>
      </section>

      <aside className="token-panel">
        <div className="panel-header"><div><span className="eyebrow">EDIT TOKENS</span><h2>Design system</h2></div><div className="history-actions"><button className="icon-button" onClick={undo} disabled={!history.past.length} aria-label="Undo last change" title={`Undo (${history.past.length}/10)`}><Icon name="undo" /></button><button className="icon-button" onClick={redo} disabled={!history.future.length} aria-label="Redo change" title="Redo"><Icon name="redo" /></button><button className="icon-button" onClick={reset} aria-label="Reset all tokens" title="Reset all"><Icon name="reset" /></button></div></div>
        <div className="tabs"><button className={editorTab === "theme" ? "active" : ""} onClick={() => setEditorTab("theme")}>Theme</button><button className={editorTab === "sizes" ? "active" : ""} onClick={() => setEditorTab("sizes")}>Shared</button><button className={editorTab === "component" ? "active" : ""} onClick={() => setEditorTab("component")}>Component</button></div>
        {editorTab === "theme" ? <div className="panel-scroll">
          <section className="control-section"><div className="section-title"><h3>Colors</h3><span>{mode}</span></div><div className="color-list">{colorControls.map(({ key, label }) => <label className="color-control" key={key}><span>{label}</span><span className="color-value"><input type="color" value={tokens[key] as string} onChange={(event) => updateToken(key, event.target.value as never)} /><code>{tokens[key] as string}</code></span></label>)}</div></section>
          <section className="token-hint"><span>→</span><div><strong>Looking for spacing or radius?</strong><p>Edit reusable definitions in the Shared tab, then assign them to components.</p></div></section>
        </div> : editorTab === "sizes" ? <div className="panel-scroll">
          <section className="control-section"><div className="section-title"><div><h3>Token definitions</h3><p>Edit values here. Components reference these by name.</p></div><span className="linked-badge">Source</span></div><div className="link-card"><span className="link-icon">⌘</span><div><strong>Single source of truth</strong><p>Every assigned component updates when a token value changes.</p></div></div></section>
          <section className="control-section"><div className="section-title"><h3>Spacing</h3><span>6 tokens</span></div>{(Object.entries(detailTokens.spacing) as [SpacingToken, number][]).map(([key, value]) => <Slider key={key} label={`space.${key}`} value={value} min={0} max={48} onChange={(next) => updateDetailToken("spacing", key, next)} />)}</section>
          <section className="control-section"><div className="section-title"><h3>Radius</h3><span>6 tokens</span></div>{(Object.entries(detailTokens.radius) as [RadiusToken, number][]).map(([key, value]) => <Slider key={key} label={`radius.${key}`} value={value} min={0} max={key === "full" ? 999 : 40} onChange={(next) => updateDetailToken("radius", key, next)} />)}</section>
          <section className="control-section"><div className="section-title"><h3>Control height</h3><span>4 tokens</span></div>{(Object.entries(detailTokens.height) as [HeightToken, number][]).map(([key, value]) => <Slider key={key} label={`height.${key}`} value={value} min={20} max={72} onChange={(next) => updateDetailToken("height", key, next)} />)}</section>
          <section className="control-section"><div className="section-title"><h3>Type scale</h3><span>4 tokens</span></div>{(Object.entries(detailTokens.font) as [FontToken, number][]).map(([key, value]) => <Slider key={key} label={`font.${key}`} value={value} min={10} max={24} onChange={(next) => updateDetailToken("font", key, next)} />)}</section>
        </div> : <div className="panel-scroll">
          <section className="control-section"><div className="section-title"><div><h3>{selectedItem.label} variants</h3><p>Override one size without changing the others.</p></div><span className={activeOverride ? "custom-badge" : "linked-badge"}>{activeOverride ? "Custom" : "Inherited"}</span></div><div className="segmented">{(["sm", "md", "lg"] as SizeId[]).map((size) => <button className={activeSize === size ? "active" : ""} onClick={() => setActiveSize(size)} key={size}>{size === "md" ? "Default" : size.toUpperCase()}{componentOverrides[component]?.[size] ? " •" : ""}</button>)}</div><div className="link-card"><span className="link-icon">{activeOverride ? "✦" : "⌘"}</span><div><strong>{activeSize.toUpperCase()} is {activeOverride ? "custom" : "linked"}</strong><p>{activeOverride ? `Only ${selectedItem.label} ${activeSize} uses these values.` : `Using the shared ${activeSize} token group.`}</p></div></div>{activeOverride ? <button className="override-action secondary" onClick={removeOverride}>Relink to shared tokens</button> : <button className="override-action" onClick={createOverride}>Create {activeSize} override</button>}</section>
          {activeOverride && <><section className="control-section"><div className="section-title"><h3>Component token assignments</h3><span>{activeSize}</span></div><TokenSelect label="Height" value={activeOverride.height} options={(Object.entries(detailTokens.height) as [HeightToken, number][]).map(([key, value]) => ({ value: key, label: `height.${key} · ${value}px` }))} onChange={(value) => updateOverrideToken("height", value)} /><TokenSelect label="Horizontal padding" value={activeOverride.padding} options={(Object.entries(detailTokens.spacing) as [SpacingToken, number][]).map(([key, value]) => ({ value: key, label: `space.${key} · ${value}px` }))} onChange={(value) => updateOverrideToken("padding", value)} /><TokenSelect label="Internal gap" value={activeOverride.gap} options={(Object.entries(detailTokens.spacing) as [SpacingToken, number][]).map(([key, value]) => ({ value: key, label: `space.${key} · ${value}px` }))} onChange={(value) => updateOverrideToken("gap", value)} /><TokenSelect label="Font size" value={activeOverride.font} options={(Object.entries(detailTokens.font) as [FontToken, number][]).map(([key, value]) => ({ value: key, label: `font.${key} · ${value}px` }))} onChange={(value) => updateOverrideToken("font", value)} /><TokenSelect label="Radius" value={activeOverride.radius} options={(Object.entries(detailTokens.radius) as [RadiusToken, number][]).map(([key, value]) => ({ value: key, label: `radius.${key} · ${value}px` }))} onChange={(value) => updateOverrideToken("radius", value)} /></section><section className="control-section"><div className="section-title"><h3>Semantic color assignments</h3><span>{mode}</span></div>{(["surface", "text", "accent", "accentText", "border"] as const).map((key) => <TokenSelect key={key} label={key === "accentText" ? "Accent text" : key[0].toUpperCase() + key.slice(1)} value={activeOverride.colors[key]} options={colorControls.map(({ key: colorKey, label }) => ({ value: colorKey as ColorToken, label: `${label} · ${tokens[colorKey]}` }))} onChange={(value) => updateOverrideColor(key, value)} />)}</section></>}
        </div>}
        <div className="panel-footer"><button onClick={reset}>Reset all</button><span>Autosaved · {history.past.length}/10 undo</span></div>
      </aside>
    </main>
  )
}

export default App
