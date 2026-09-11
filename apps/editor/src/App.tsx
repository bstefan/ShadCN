import { type CSSProperties, type ReactNode, useMemo, useState } from "react"

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

type ComponentOverride = {
  height: number
  padding: number
  gap: number
  font: number
  radius: number
  colors: Record<Mode, { surface: string; text: string; accent: string; accentText: string; border: string }>
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

const colorControls: { key: keyof Tokens; label: string }[] = [
  { key: "background", label: "Background" }, { key: "foreground", label: "Foreground" }, { key: "card", label: "Card" }, { key: "primary", label: "Primary" }, { key: "primaryForeground", label: "Primary foreground" }, { key: "secondary", label: "Secondary" }, { key: "muted", label: "Muted" }, { key: "mutedForeground", label: "Muted foreground" }, { key: "border", label: "Border" }, { key: "destructive", label: "Destructive" }, { key: "ring", label: "Ring" },
]

function tokenStyle(tokens: Tokens): CSSProperties {
  return {
    "--background": tokens.background, "--foreground": tokens.foreground, "--card": tokens.card, "--primary": tokens.primary, "--primary-foreground": tokens.primaryForeground, "--secondary": tokens.secondary, "--muted": tokens.muted, "--muted-foreground": tokens.mutedForeground, "--border": tokens.border, "--destructive": tokens.destructive, "--ring": tokens.ring, "--radius": `${tokens.radius}px`, "--space": `${tokens.density}px`,
    "--control-sm-height": `${tokens.size.sm.height}px`, "--control-sm-px": `${tokens.size.sm.padding}px`, "--control-sm-gap": `${tokens.size.sm.gap}px`, "--control-sm-font": `${tokens.size.sm.font}px`,
    "--control-md-height": `${tokens.size.md.height}px`, "--control-md-px": `${tokens.size.md.padding}px`, "--control-md-gap": `${tokens.size.md.gap}px`, "--control-md-font": `${tokens.size.md.font}px`,
    "--control-lg-height": `${tokens.size.lg.height}px`, "--control-lg-px": `${tokens.size.lg.padding}px`, "--control-lg-gap": `${tokens.size.lg.gap}px`, "--control-lg-font": `${tokens.size.lg.font}px`,
  } as CSSProperties
}

function componentStyle(override: ComponentOverride | undefined, mode: Mode, size: SizeId): CSSProperties | undefined {
  if (!override) return undefined
  const colors = override.colors[mode]
  return {
    [`--control-${size}-height`]: `${override.height}px`, [`--control-${size}-px`]: `${override.padding}px`, [`--control-${size}-gap`]: `${override.gap}px`, [`--control-${size}-font`]: `${override.font}px`, "--radius": `${override.radius}px`,
    "--background": colors.surface, "--card": colors.surface, "--foreground": colors.text, "--primary": colors.accent, "--primary-foreground": colors.accentText, "--border": colors.border,
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

function App() {
  const [component, setComponent] = useState<ComponentId>("button")
  const [mode, setMode] = useState<Mode>("light")
  const [tokensByMode, setTokensByMode] = useState<Record<Mode, Tokens>>({ light: lightTokens, dark: darkTokens })
  const [editorTab, setEditorTab] = useState<"theme" | "sizes" | "component">("theme")
  const [activeSize, setActiveSize] = useState<SizeId>("md")
  const [copied, setCopied] = useState(false)
  const [query, setQuery] = useState("")
  const [componentOverrides, setComponentOverrides] = useState<Record<ComponentId, Partial<Record<SizeId, ComponentOverride>>>>({})
  const tokens = tokensByMode[mode]
  const selectedItem = allItems.find((item) => item.id === component)!
  const activeOverride = componentOverrides[component]?.[activeSize]
  const filteredGroups = componentGroups.map((group) => ({ ...group, items: group.items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())) })).filter((group) => group.items.length)

  const cssExport = useMemo(() => {
    const overrides = Object.entries(componentOverrides).flatMap(([componentId, sizes]) => (Object.entries(sizes) as [SizeId, ComponentOverride][]).map(([size, override]) => {
      const selector = `[data-component="${componentId}"][data-size="${size}"]`
      const dimensions = `  --control-${size}-height: ${override.height}px;\n  --control-${size}-px: ${override.padding}px;\n  --control-${size}-gap: ${override.gap}px;\n  --control-${size}-font: ${override.font}px;\n  --radius: ${override.radius}px;`
      const colors = (palette: ComponentOverride["colors"][Mode]) => `  --background: ${palette.surface};\n  --card: ${palette.surface};\n  --foreground: ${palette.text};\n  --primary: ${palette.accent};\n  --primary-foreground: ${palette.accentText};\n  --border: ${palette.border};`
      return `${selector} {\n${dimensions}\n${colors(override.colors.light)}\n}\n\n.dark ${selector} {\n${colors(override.colors.dark)}\n}`
    })).join("\n\n")
    return `:root {\n${colorControls.map(({ key }) => `  --${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}: ${tokens[key]};`).join("\n")}\n  --radius: ${tokens.radius}px;\n  --space: ${tokens.density}px;\n}${overrides ? `\n\n${overrides}` : ""}`
  }, [componentOverrides, tokens])

  const updateToken = <K extends keyof Tokens>(key: K, value: Tokens[K]) => setTokensByMode((current) => {
    if (key === "radius" || key === "density") {
      return {
        light: { ...current.light, [key]: value as number },
        dark: { ...current.dark, [key]: value as number },
      }
    }
    return { ...current, [mode]: { ...current[mode], [key]: value } }
  })
  const updateSize = (key: keyof Tokens["size"][SizeId], value: number) => setTokensByMode((current) => {
    const apply = (theme: Tokens): Tokens => ({ ...theme, size: { ...theme.size, [activeSize]: { ...theme.size[activeSize], [key]: value } } })
    return { light: apply(current.light), dark: apply(current.dark) }
  })
  const createOverride = () => setComponentOverrides((current) => ({ ...current, [component]: { ...current[component], [activeSize]: {
    ...tokens.size[activeSize], radius: tokens.radius,
    colors: {
      light: { surface: tokensByMode.light.background, text: tokensByMode.light.foreground, accent: tokensByMode.light.primary, accentText: tokensByMode.light.primaryForeground, border: tokensByMode.light.border },
      dark: { surface: tokensByMode.dark.background, text: tokensByMode.dark.foreground, accent: tokensByMode.dark.primary, accentText: tokensByMode.dark.primaryForeground, border: tokensByMode.dark.border },
    },
  } } }))
  const removeOverride = () => setComponentOverrides((current) => {
    const nextForComponent = { ...current[component] }
    delete nextForComponent[activeSize]
    return { ...current, [component]: nextForComponent }
  })
  const updateOverrideMetric = (key: "height" | "padding" | "gap" | "font" | "radius", value: number) => setComponentOverrides((current) => ({ ...current, [component]: { ...current[component], [activeSize]: { ...current[component]?.[activeSize]!, [key]: value } } }))
  const updateOverrideColor = (key: "surface" | "text" | "accent" | "accentText" | "border", value: string) => setComponentOverrides((current) => {
    const override = current[component]?.[activeSize]!
    return { ...current, [component]: { ...current[component], [activeSize]: { ...override, colors: { ...override.colors, [mode]: { ...override.colors[mode], [key]: value } } } } }
  })
  const reset = () => { setTokensByMode({ light: lightTokens, dark: darkTokens }); setComponentOverrides({}) }
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

      <section className="preview-area" style={tokenStyle(tokens)} data-theme={mode}>
        <div className="preview-heading"><div><span className="eyebrow">COMPONENT / {selectedItem.label.toUpperCase()}</span><h1>{selectedItem.label}</h1><p>Inspect every state. Adjust its shared tokens from the sidebar.</p></div><div className="mode-pill"><span className={mode === "light" ? "active" : ""}>Light</span><span className={mode === "dark" ? "active" : ""}>Dark</span></div></div>
        <div className="preview-grid">
          {(["sm", "md", "lg"] as SizeId[]).map((size) => { const override = componentOverrides[component]?.[size]; return <div className="size-column" key={size}><div className="size-title"><span>{size === "md" ? "Default" : size.toUpperCase()}{override && <b>Custom</b>}</span><button onClick={() => { setActiveSize(size); setEditorTab("component") }}>Edit {size}<Icon name="arrow" size={13} /></button></div>{statesForComponent(component).map((state) => <div className="state-row" key={state}><span className="state-label">{state}</span><div className="component-stage" data-component={component} data-size={size} style={componentStyle(override, mode, size)}><PreviewComponent component={component} state={state} size={size} /></div></div>)}</div> })}
        </div>
        <div className="token-footnote"><span className="link-node" /><span className="link-line" /><p><strong>Size-linked variants</strong>All {activeSize} components share height, padding, gap and type tokens.</p></div>
      </section>

      <aside className="token-panel">
        <div className="panel-header"><div><span className="eyebrow">EDIT TOKENS</span><h2>Design system</h2></div><button className="icon-button" onClick={reset} aria-label="Reset all tokens"><Icon name="reset" /></button></div>
        <div className="tabs"><button className={editorTab === "theme" ? "active" : ""} onClick={() => setEditorTab("theme")}>Theme</button><button className={editorTab === "sizes" ? "active" : ""} onClick={() => setEditorTab("sizes")}>Shared</button><button className={editorTab === "component" ? "active" : ""} onClick={() => setEditorTab("component")}>Component</button></div>
        {editorTab === "theme" ? <div className="panel-scroll">
          <section className="control-section"><div className="section-title"><h3>Colors</h3><span>{mode}</span></div><div className="color-list">{colorControls.map(({ key, label }) => <label className="color-control" key={key}><span>{label}</span><span className="color-value"><input type="color" value={tokens[key] as string} onChange={(event) => updateToken(key, event.target.value as never)} /><code>{tokens[key] as string}</code></span></label>)}</div></section>
          <section className="control-section"><div className="section-title"><h3>Shape & spacing</h3></div><Slider label="Radius" value={tokens.radius} min={0} max={24} onChange={(value) => updateToken("radius", value)} /><Slider label="Base spacing" value={tokens.density} min={8} max={28} onChange={(value) => updateToken("density", value)} /></section>
        </div> : editorTab === "sizes" ? <div className="panel-scroll">
          <section className="control-section"><div className="section-title"><div><h3>Variant size</h3><p>Changes apply across every component.</p></div><span className="linked-badge">Linked</span></div><div className="segmented">{(["sm", "md", "lg"] as SizeId[]).map((size) => <button className={activeSize === size ? "active" : ""} onClick={() => setActiveSize(size)} key={size}>{size === "md" ? "Default" : size.toUpperCase()}</button>)}</div><div className="link-card"><span className="link-icon">⌘</span><div><strong>{activeSize.toUpperCase()} token group</strong><p>All compatible variants in the 61-component registry stay in sync.</p></div></div></section>
          <section className="control-section"><div className="section-title"><h3>Dimensions</h3><span>{activeSize}</span></div><Slider label="Height" value={tokens.size[activeSize].height} min={24} max={56} onChange={(value) => updateSize("height", value)} /><Slider label="Horizontal padding" value={tokens.size[activeSize].padding} min={6} max={32} onChange={(value) => updateSize("padding", value)} /><Slider label="Internal gap" value={tokens.size[activeSize].gap} min={2} max={20} onChange={(value) => updateSize("gap", value)} /><Slider label="Font size" value={tokens.size[activeSize].font} min={11} max={18} onChange={(value) => updateSize("font", value)} /></section>
          <section className="affected-section"><h3>Affected variants</h3>{["Button", "Input", "Select", "Badge"].map((label) => <div key={label}><span>{label}</span><span>{activeSize}<Icon name="check" size={13} /></span></div>)}</section>
        </div> : <div className="panel-scroll">
          <section className="control-section"><div className="section-title"><div><h3>{selectedItem.label} variants</h3><p>Override one size without changing the others.</p></div><span className={activeOverride ? "custom-badge" : "linked-badge"}>{activeOverride ? "Custom" : "Inherited"}</span></div><div className="segmented">{(["sm", "md", "lg"] as SizeId[]).map((size) => <button className={activeSize === size ? "active" : ""} onClick={() => setActiveSize(size)} key={size}>{size === "md" ? "Default" : size.toUpperCase()}{componentOverrides[component]?.[size] ? " •" : ""}</button>)}</div><div className="link-card"><span className="link-icon">{activeOverride ? "✦" : "⌘"}</span><div><strong>{activeSize.toUpperCase()} is {activeOverride ? "custom" : "linked"}</strong><p>{activeOverride ? `Only ${selectedItem.label} ${activeSize} uses these values.` : `Using the shared ${activeSize} token group.`}</p></div></div>{activeOverride ? <button className="override-action secondary" onClick={removeOverride}>Relink to shared tokens</button> : <button className="override-action" onClick={createOverride}>Create {activeSize} override</button>}</section>
          {activeOverride && <><section className="control-section"><div className="section-title"><h3>Component dimensions</h3><span>{activeSize}</span></div><Slider label="Height" value={activeOverride.height} min={20} max={72} onChange={(value) => updateOverrideMetric("height", value)} /><Slider label="Horizontal padding" value={activeOverride.padding} min={4} max={40} onChange={(value) => updateOverrideMetric("padding", value)} /><Slider label="Internal gap" value={activeOverride.gap} min={0} max={24} onChange={(value) => updateOverrideMetric("gap", value)} /><Slider label="Font size" value={activeOverride.font} min={10} max={22} onChange={(value) => updateOverrideMetric("font", value)} /><Slider label="Radius" value={activeOverride.radius} min={0} max={32} onChange={(value) => updateOverrideMetric("radius", value)} /></section><section className="control-section"><div className="section-title"><h3>Component colors</h3><span>{mode}</span></div><div className="color-list">{(["surface", "text", "accent", "accentText", "border"] as const).map((key) => <label className="color-control" key={key}><span>{key === "accentText" ? "Accent text" : key[0].toUpperCase() + key.slice(1)}</span><span className="color-value"><input type="color" value={activeOverride.colors[mode][key]} onChange={(event) => updateOverrideColor(key, event.target.value)} /><code>{activeOverride.colors[mode][key]}</code></span></label>)}</div></section></>}
        </div>}
        <div className="panel-footer"><button onClick={reset}>Reset all</button><span>Stored in this session</span></div>
      </aside>
    </main>
  )
}

export default App
