/* @ds-bundle: {"format":4,"namespace":"HALCYONHUDDesignSystem_6201ce","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BrandMark","sourcePath":"components/core/BrandMark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Plate","sourcePath":"components/core/Plate.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"BarSegments","sourcePath":"components/data/BarSegments.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"DonutGauge","sourcePath":"components/data/DonutGauge.jsx"},{"name":"LineChart","sourcePath":"components/data/LineChart.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"RulerScale","sourcePath":"components/data/RulerScale.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"CalloutLeader","sourcePath":"components/layout/CalloutLeader.jsx"},{"name":"CornerFrame","sourcePath":"components/layout/CornerFrame.jsx"},{"name":"FocusFrame","sourcePath":"components/layout/FocusFrame.jsx"},{"name":"GridField","sourcePath":"components/layout/GridField.jsx"},{"name":"TaskBlock","sourcePath":"components/layout/TaskBlock.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"StatusStrip","sourcePath":"components/navigation/StatusStrip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"ba4447a966ab","components/core/BrandMark.jsx":"28ab7cadcedd","components/core/Button.jsx":"250b5524e6ed","components/core/Plate.jsx":"dc471dce4784","components/core/SectionHeader.jsx":"773d10da6594","components/data/BarSegments.jsx":"a5d91a5f21fe","components/data/DataTable.jsx":"548e5dab4a9f","components/data/DonutGauge.jsx":"86e7bb18c34d","components/data/LineChart.jsx":"46f4888336e8","components/data/MetricCard.jsx":"0bc7c26cd200","components/data/RulerScale.jsx":"e50a061ce439","components/forms/Input.jsx":"e2522b200e3c","components/forms/Slider.jsx":"338bc0bf9450","components/forms/Toggle.jsx":"5200365a28f7","components/layout/CalloutLeader.jsx":"5bb5df95ce6c","components/layout/CornerFrame.jsx":"a4098e7654c5","components/layout/FocusFrame.jsx":"a723fcee249f","components/layout/GridField.jsx":"e54bd0d0310b","components/layout/TaskBlock.jsx":"06232a0a9a60","components/navigation/SideNav.jsx":"b9c4abc84e43","components/navigation/StatusStrip.jsx":"e0e8222d4ef4","ui_kits/hud_console/MissionPlanScreen.jsx":"38132750dd03","ui_kits/hud_console/ScanScreen.jsx":"ad646290628b","ui_kits/hud_console/SpecPosterScreen.jsx":"17e437cb91a7","ui_kits/hud_console/TelemetryScreen.jsx":"c46fa0e5bc88","ui_kits/spec_sheet/SpecSheetScreen.jsx":"984c4cb88a1b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HALCYONHUDDesignSystem_6201ce = window.HALCYONHUDDesignSystem_6201ce || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  ok: {
    background: "var(--state-ok)",
    color: "var(--text-on-solid)",
    border: "1px solid var(--state-ok)"
  },
  fault: {
    background: "var(--state-fault)",
    color: "var(--text-on-solid)",
    border: "1px solid var(--state-fault)"
  },
  signal: {
    background: "var(--veil-chrome)",
    color: "var(--text-signal)",
    border: "1px solid var(--signal)",
    backdropFilter: "var(--blur-chrome)"
  },
  idle: {
    background: "var(--veil-chrome)",
    color: "var(--text-secondary)",
    border: "1px solid var(--border-strong)",
    backdropFilter: "var(--blur-chrome)"
  }
};
function Badge({
  tone = "idle",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      padding: "var(--pad-badge)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-micro)",
      fontWeight: "var(--fw-regular)",
      letterSpacing: "var(--track-key)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-0)",
      ...(TONES[tone] || TONES.idle),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BrandMark({
  size = 12,
  label = "HALCYON",
  sub,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      border: "1px solid var(--signal)",
      position: "relative",
      flex: `0 0 ${size}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: Math.max(2, Math.round(size / 4)),
      background: "var(--signal)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-small)",
      letterSpacing: "var(--track-label)",
      color: "var(--text-primary)"
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-nano)",
      letterSpacing: "var(--track-key)",
      color: "var(--text-faint)",
      lineHeight: "var(--lh-micro)"
    }
  }, sub)));
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  primary: {
    background: "var(--signal)",
    color: "var(--text-on-signal)",
    border: "1px solid var(--signal)"
  },
  standby: {
    background: "var(--veil-chrome)",
    color: "var(--text-primary)",
    border: "1px solid var(--border-ink)",
    backdropFilter: "var(--blur-chrome)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-secondary)",
    border: "1px solid var(--border-hair)"
  },
  abort: {
    background: "var(--veil-chrome)",
    color: "var(--state-fault)",
    border: "1px solid var(--state-fault)",
    backdropFilter: "var(--blur-chrome)"
  }
};
const HOVERS = {
  primary: {
    background: "var(--signal-hi)"
  },
  standby: {
    borderColor: "var(--signal)",
    color: "var(--text-signal)"
  },
  ghost: {
    borderColor: "var(--border-strong)",
    color: "var(--text-primary)"
  },
  abort: {
    background: "rgba(216,86,75,.12)"
  }
};
const SIZES = {
  md: {
    padding: "14px 26px",
    fontSize: "var(--t-small)"
  },
  sm: {
    padding: "9px 18px",
    fontSize: "var(--t-micro)"
  }
};
function Button({
  tone = "primary",
  size = "md",
  disabled = false,
  blink = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--sp-3)",
    fontFamily: "var(--font-mono)",
    fontWeight: "var(--fw-regular)",
    letterSpacing: "var(--track-label)",
    textTransform: "uppercase",
    borderRadius: "var(--radius-0)",
    cursor: disabled ? "default" : "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    ...(SIZES[size] || SIZES.md),
    ...(TONES[tone] || TONES.primary)
  };
  const off = disabled ? {
    background: "var(--veil-chrome)",
    color: "var(--text-faint)",
    border: "1px solid var(--border-hair)",
    cursor: "default"
  } : hover ? HOVERS[tone] : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "button",
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...off,
      ...style
    }
  }, rest), blink && !disabled ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: "currentColor",
      animation: "hal-blink var(--dur-blink) var(--ease-step) infinite"
    }
  }) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Plate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Plate({
  label,
  meta,
  frosted = true,
  tone = "hair",
  padding,
  children,
  style,
  ...rest
}) {
  const borders = {
    hair: "var(--border-hair)",
    strong: "var(--border-strong)",
    signal: "var(--signal)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: `1px solid ${borders[tone] || borders.hair}`,
      background: frosted ? "var(--veil-plate)" : "var(--surface-plate)",
      backdropFilter: frosted ? "var(--blur-plate)" : undefined,
      borderRadius: "var(--radius-0)",
      padding: padding || "var(--pad-plate)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      minWidth: 0,
      ...style
    }
  }, rest), (label || meta) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "var(--sp-4)"
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-micro)",
      letterSpacing: "var(--track-label)",
      color: "var(--text-faint)",
      textTransform: "uppercase"
    }
  }, label), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-nano)",
      letterSpacing: "var(--track-nav)",
      color: "var(--text-faint)"
    }
  }, meta)), children);
}
Object.assign(__ds_scope, { Plate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Plate.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  index,
  title,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-4)",
      fontSize: "var(--t-micro)",
      letterSpacing: "var(--track-micro)",
      color: "var(--text-faint)",
      textTransform: "uppercase",
      ...style
    }
  }, rest), index && /*#__PURE__*/React.createElement("span", null, index), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: 64,
      background: "var(--border-strong)"
    }
  }), /*#__PURE__*/React.createElement("span", null, title));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/data/BarSegments.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BarSegments({
  total = 4,
  filled = 0,
  tone = "signal",
  size = "md",
  style,
  ...rest
}) {
  const fill = {
    signal: "var(--signal)",
    ok: "var(--state-ok)",
    fault: "var(--state-fault)",
    warn: "var(--state-warn)",
    dim: "var(--signal-dim)"
  }[tone] || "var(--signal)";
  const dims = size === "sm" ? {
    width: 13,
    height: 6,
    gap: 3
  } : {
    width: "var(--bar-w)",
    height: "var(--bar-h)",
    gap: 4
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: dims.gap,
      ...style
    }
  }, rest), Array.from({
    length: total
  }, (_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: dims.width,
      height: dims.height,
      background: i < filled ? fill : "var(--track-empty)",
      transform: "var(--bar-skew)"
    }
  })));
}
Object.assign(__ds_scope, { BarSegments });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarSegments.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  style,
  ...rest
}) {
  const template = columns.map(c => c.width || "1fr").join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--border-hair)",
      background: "var(--veil-plate)",
      backdropFilter: "var(--blur-plate)",
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: template,
      padding: "16px 24px",
      borderBottom: "1px solid var(--border-hair)",
      fontSize: "var(--t-micro)",
      letterSpacing: "var(--track-label)",
      color: "var(--text-faint)",
      textTransform: "uppercase"
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, c.label))), rows.map((r, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: "grid",
      gridTemplateColumns: template,
      padding: "var(--pad-cell)",
      borderBottom: ri === rows.length - 1 ? "none" : "1px solid var(--border-hair)",
      fontSize: "var(--t-small)",
      letterSpacing: "var(--track-nav)",
      textTransform: "uppercase",
      color: r.tone === "fault" ? "var(--state-fault)" : "var(--text-primary)"
    }
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      color: c.muted && r.tone !== "fault" ? "var(--text-secondary)" : undefined,
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, r.cells[ci])))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/DonutGauge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DonutGauge({
  segments = [],
  value,
  label,
  size = 186,
  style,
  ...rest
}) {
  let acc = 0;
  const stops = segments.map(s => {
    const from = acc;
    acc += s.pct;
    return `${s.color} ${from}% ${acc}%`;
  });
  if (acc < 100) stops.push(`var(--border-hair) ${acc}% 100%`);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      background: `conic-gradient(${stops.join(",")})`,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: Math.round(size * 0.118),
      borderRadius: "var(--radius-pill)",
      background: "var(--veil-solid)",
      backdropFilter: "var(--blur-plate)",
      border: "1px solid var(--border-hair)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: Math.max(14, Math.round(size * 0.183)),
      fontWeight: "var(--fw-hairline)",
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size < 150 ? "var(--t-nano)" : "var(--t-micro)",
      letterSpacing: "var(--track-label)",
      color: "var(--text-faint)",
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, label)));
}
Object.assign(__ds_scope, { DonutGauge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DonutGauge.jsx", error: String((e && e.message) || e) }); }

// components/data/LineChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LineChart({
  series = [],
  baseline = [],
  labels = [],
  height = 200,
  style,
  ...rest
}) {
  const toPoints = pts => pts.map(p => p.join(",")).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      minHeight: height,
      borderLeft: "1px solid var(--border-strong)",
      borderBottom: "1px solid var(--border-strong)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 200",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block"
    }
  }, baseline.length > 0 && /*#__PURE__*/React.createElement("polyline", {
    points: toPoints(baseline),
    fill: "none",
    stroke: "var(--border-strong)",
    strokeWidth: "1",
    strokeDasharray: "4 4",
    vectorEffect: "non-scaling-stroke"
  }), series.map((s, i) => /*#__PURE__*/React.createElement("polyline", {
    key: i,
    points: toPoints(s.points),
    fill: "none",
    stroke: s.color || "var(--signal)",
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke"
  })))), labels.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--t-nano)",
      letterSpacing: "var(--track-key)",
      color: "var(--text-faint)"
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, l))));
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetricCard({
  label,
  value,
  unit,
  meter,
  tone = "signal",
  style,
  ...rest
}) {
  const fault = tone === "fault";
  const fill = {
    signal: "var(--signal)",
    ok: "var(--state-ok)",
    fault: "var(--state-fault)"
  }[tone] || "var(--signal)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--border-hair)",
      background: "var(--veil-plate)",
      backdropFilter: "var(--blur-plate)",
      padding: "22px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-micro)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: fault ? "var(--state-fault)" : "var(--text-faint)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-metric)",
      fontWeight: "var(--fw-hairline)",
      letterSpacing: "var(--track-flat)",
      whiteSpace: "nowrap",
      color: fault ? "var(--state-fault)" : "var(--text-primary)",
      lineHeight: 1
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      color: "var(--text-secondary)",
      letterSpacing: "var(--track-data)"
    }
  }, " ", unit)), typeof meter === "number" && /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--meter-h)",
      background: "var(--track-empty)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: `${Math.max(0, Math.min(100, meter))}%`,
      background: fill
    }
  })));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/RulerScale.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RulerScale({
  ticks = 7,
  labels = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      height: 14
    }
  }, Array.from({
    length: ticks
  }, (_, i) => {
    const major = i % 3 === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: 1,
        height: major ? 14 : 7,
        background: major ? "var(--text-secondary)" : "var(--border-strong)"
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-strong)"
    }
  }), labels.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--t-nano)",
      letterSpacing: "var(--track-nav)",
      color: "var(--text-faint)"
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, l))));
}
Object.assign(__ds_scope, { RulerScale });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RulerScale.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  value,
  placeholder,
  caret = true,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--border-strong)",
      background: "var(--veil-field)",
      backdropFilter: "var(--blur-chrome)",
      padding: "var(--pad-field)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--sp-3)",
      borderRadius: "var(--radius-0)",
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-small)",
      letterSpacing: "var(--track-data)",
      color: value ? "var(--text-primary)" : "var(--text-faint)",
      textAlign: align,
      flex: 1,
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, value || placeholder), caret && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 2,
      height: 14,
      background: "var(--signal)",
      flex: "0 0 2px",
      animation: "hal-blink var(--dur-caret) var(--ease-step) infinite"
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Slider({
  value = 0,
  tone = "signal",
  unit = "%",
  showValue = true,
  style,
  ...rest
}) {
  const fill = {
    signal: "var(--signal)",
    ok: "var(--state-ok)",
    fault: "var(--state-fault)"
  }[tone] || "var(--signal)";
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-4)",
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "var(--meter-h)",
      background: "var(--track-empty)",
      position: "relative",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: `${pct}%`,
      background: fill
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `${pct}%`,
      top: -6,
      width: 3,
      height: 15,
      background: "var(--text-primary)"
    }
  })), showValue && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-small)",
      letterSpacing: "var(--track-data)",
      width: 48,
      textAlign: "right",
      flex: "0 0 48px"
    }
  }, pct, " ", unit));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toggle({
  checked = false,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      cursor: "pointer",
      userSelect: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      flex: "0 0 14px",
      background: checked ? "var(--signal)" : "transparent",
      border: checked ? "1px solid var(--signal)" : "1px solid var(--border-strong)"
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-small)",
      letterSpacing: "var(--track-key)",
      textTransform: "uppercase",
      color: checked ? "var(--text-primary)" : "var(--text-faint)"
    }
  }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/layout/CalloutLeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CalloutLeader({
  title,
  body,
  direction = "right",
  leaderLength = 34,
  style,
  ...rest
}) {
  const right = direction === "left";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: right ? "row-reverse" : "row",
      alignItems: "flex-start",
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      flex: "0 0 auto",
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: leaderLength,
      height: 1,
      background: "var(--text-secondary)",
      flex: `0 0 ${leaderLength}px`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 17,
      background: "var(--text-secondary)",
      flex: "0 0 1px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      padding: right ? "0 10px 0 0" : "0 0 0 10px",
      minWidth: 0,
      textAlign: right ? "right" : "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-small)",
      letterSpacing: "var(--track-key)",
      color: "var(--text-primary)",
      textTransform: "uppercase"
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-nano)",
      letterSpacing: "var(--track-data)",
      color: "var(--text-faint)",
      lineHeight: "var(--lh-micro)",
      textTransform: "uppercase"
    }
  }, body)));
}
Object.assign(__ds_scope, { CalloutLeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CalloutLeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/CornerFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CornerFrame({
  tone = "signal",
  dashed = false,
  thickness = 1,
  inset = -4,
  size = 9,
  children,
  style,
  ...rest
}) {
  const color = {
    signal: "var(--signal)",
    ok: "var(--state-ok)",
    ink: "var(--text-primary)"
  }[tone] || "var(--signal)";
  const tick = (v, h) => ({
    position: "absolute",
    width: size,
    height: size,
    [v]: inset,
    [h]: inset,
    [`border${v === "top" ? "Top" : "Bottom"}`]: `${thickness}px solid ${color}`,
    [`border${h === "left" ? "Left" : "Right"}`]: `${thickness}px solid ${color}`
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      border: dashed ? "var(--rule-dashed)" : undefined,
      minWidth: 0,
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("div", {
    style: tick("top", "left")
  }), /*#__PURE__*/React.createElement("div", {
    style: tick("top", "right")
  }), /*#__PURE__*/React.createElement("div", {
    style: tick("bottom", "left")
  }), /*#__PURE__*/React.createElement("div", {
    style: tick("bottom", "right")
  }));
}
Object.assign(__ds_scope, { CornerFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CornerFrame.jsx", error: String((e && e.message) || e) }); }

// components/layout/FocusFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FocusFrame({
  insetX = "24%",
  insetY = 26,
  label,
  handles = true,
  children,
  style,
  ...rest
}) {
  const veil = {
    backdropFilter: "var(--blur-veil)",
    background: "var(--veil-mask)",
    position: "absolute"
  };
  const h = s => ({
    position: "absolute",
    width: "var(--handle-size)",
    height: "var(--handle-size)",
    background: "var(--text-primary)",
    ...s
  });
  const y = typeof insetY === "number" ? `${insetY}px` : insetY;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      minWidth: 0,
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("div", {
    style: {
      ...veil,
      left: 0,
      right: 0,
      top: 0,
      height: y
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...veil,
      left: 0,
      right: 0,
      bottom: 0,
      height: y
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...veil,
      left: 0,
      top: y,
      bottom: y,
      width: insetX
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...veil,
      right: 0,
      top: y,
      bottom: y,
      width: insetX
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: insetX,
      right: insetX,
      top: y,
      bottom: y,
      border: "1px solid rgba(233,231,226,.55)"
    }
  }, handles && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: h({
      left: -3,
      top: -3
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: h({
      left: "calc(50% - 3px)",
      top: -3
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: h({
      right: -3,
      top: -3
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: h({
      left: -3,
      top: "calc(50% - 3px)"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: h({
      right: -3,
      top: "calc(50% - 3px)"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: h({
      left: -3,
      bottom: -3
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: h({
      left: "calc(50% - 3px)",
      bottom: -3
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: h({
      right: -3,
      bottom: -3
    })
  })), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -22,
      fontSize: "var(--t-nano)",
      letterSpacing: "var(--track-label)",
      color: "var(--text-signal)",
      textTransform: "uppercase"
    }
  }, label)));
}
Object.assign(__ds_scope, { FocusFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FocusFrame.jsx", error: String((e && e.message) || e) }); }

// components/layout/GridField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GridField({
  cell = 96,
  tone = "page",
  children,
  style,
  ...rest
}) {
  const line = tone === "radar" ? "var(--grid-line-radar)" : "var(--grid-line)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      backgroundColor: tone === "radar" ? "var(--surface-radar)" : "var(--surface-page)",
      backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
      backgroundSize: `${cell}px ${cell}px`,
      backgroundPosition: "-1px -1px",
      minWidth: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GridField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/GridField.jsx", error: String((e && e.message) || e) }); }

// components/layout/TaskBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TaskBlock({
  stamp = "//TASK",
  title,
  priority = 3,
  tone = "signal",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--border-strong)",
      background: "var(--veil-plate)",
      backdropFilter: "var(--blur-plate)",
      padding: "16px 18px",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-micro)",
      letterSpacing: "var(--track-label)",
      color: "var(--text-faint)"
    }
  }, stamp), /*#__PURE__*/React.createElement(__ds_scope.BarSegments, {
    total: 3,
    filled: priority,
    tone: tone,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-body)",
      letterSpacing: "var(--track-data)",
      textTransform: "uppercase"
    }
  }, title));
}
Object.assign(__ds_scope, { TaskBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/TaskBlock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavItem({
  item,
  active,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onSelect && onSelect(item.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      padding: "11px var(--sp-6)",
      cursor: "pointer",
      fontSize: "var(--t-small)",
      letterSpacing: "var(--track-nav)",
      textTransform: "uppercase",
      background: hover ? "var(--surface-plate)" : "transparent",
      color: active || hover ? "var(--text-primary)" : "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 14,
      flex: "0 0 3px",
      background: active ? "var(--signal)" : "var(--border-strong)"
    }
  }), /*#__PURE__*/React.createElement("span", null, item.label));
}
function SideNav({
  brand = "HALCYON",
  sub,
  groupLabel = "// SCREENS",
  items = [],
  active,
  onSelect,
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "var(--nav-width)",
      flex: "0 0 var(--nav-width)",
      borderRight: "1px solid var(--border-hair)",
      padding: "var(--sp-7) 0",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-8)",
      height: "100vh",
      position: "sticky",
      top: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BrandMark, {
    label: brand,
    sub: sub
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, groupLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--sp-6) 10px",
      fontSize: "var(--t-micro)",
      letterSpacing: "var(--track-label)",
      color: "var(--text-faint)"
    }
  }, groupLabel), items.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    item: it,
    active: it.id === active,
    onSelect: onSelect
  }))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "0 var(--sp-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)"
    }
  }, footer));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StatusStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatusStrip({
  left = [],
  right = [],
  style,
  ...rest
}) {
  const cell = (c, i) => {
    if (c && c.swatches) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          gap: 4
        }
      }, c.swatches.map((s, j) => /*#__PURE__*/React.createElement("div", {
        key: j,
        style: {
          width: 12,
          height: 12,
          background: s
        }
      })));
    }
    const tone = c && c.tone;
    const color = tone === "ok" ? "var(--state-ok)" : tone === "signal" ? "var(--text-signal)" : tone === "bright" ? "var(--text-primary)" : "inherit";
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        color,
        whiteSpace: "nowrap"
      }
    }, c && c.text !== undefined ? c.text : c);
  };
  const side = {
    display: "flex",
    alignItems: "center",
    gap: "var(--sp-5)",
    minWidth: 0
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--sp-5)",
      border: "1px solid var(--border-hair)",
      background: "var(--veil-chrome)",
      backdropFilter: "var(--blur-chrome)",
      padding: "14px 22px",
      fontSize: "var(--t-micro)",
      letterSpacing: "var(--track-key)",
      color: "var(--text-secondary)",
      textTransform: "uppercase",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: side
  }, left.map(cell)), /*#__PURE__*/React.createElement("div", {
    style: side
  }, right.map(cell)));
}
Object.assign(__ds_scope, { StatusStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StatusStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hud_console/MissionPlanScreen.jsx
try { (() => {
(function () {
  const {
    TaskBlock,
    SectionHeader
  } = window.__HAL || {};
  const DATES = ["JULY 3–5", "JULY 7–9", "JULY 10–12", "JULY 14–16", "JULY 17–19"];
  const TRACKS = [{
    name: "MVP 1 ORBITAL BUILD",
    tasks: [{
      span: "2 / span 2",
      title: "Setup and infrastructure",
      tone: "fault",
      priority: 3
    }, {
      span: "3 / span 2",
      title: "Scraper and data validation",
      tone: "warn",
      priority: 3
    }, {
      span: "4 / span 3",
      title: "AI content and membership logic",
      tone: "signal",
      priority: 3
    }]
  }, {
    name: "MVP 2 STRIKE BUILD",
    tasks: [{
      span: "2 / span 2",
      title: "Webhook & intake pipe",
      tone: "fault",
      priority: 3
    }, {
      span: "5 / span 2",
      title: "Membership & reward logic",
      tone: "ok",
      priority: 3
    }, {
      span: "3 / span 3",
      title: "Treatment generation + fallback images",
      tone: "signal",
      priority: 3
    }]
  }];
  function MissionPlanScreen() {
    const grid = {
      display: "grid",
      gridTemplateColumns: "96px repeat(5, 1fr)",
      gap: "var(--sp-3)"
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--page-pad)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--sp-8)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottom: "1px solid var(--border-hair)",
        paddingBottom: 22,
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      index: "// MISSION PLAN",
      title: "Q3 WINDOW"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-title)",
        fontWeight: "var(--fw-light)"
      }
    }, "JULY")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--sp-4)",
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-key)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "2 TRACKS"), /*#__PURE__*/React.createElement("span", null, "6 TASKS"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-signal)"
      }
    }, "ON SCHEDULE"))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...grid,
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-key)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("div", null), DATES.map(d => /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        border: "1px solid var(--border-hair)",
        padding: "11px 0",
        textAlign: "center",
        background: "var(--veil-chrome)",
        backdropFilter: "var(--blur-chrome)"
      }
    }, d))), TRACKS.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: t.name
    }, i > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border-hair)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...grid,
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        gridRow: "span 3",
        border: "1px solid var(--border-hair)",
        background: "var(--veil-chrome)",
        backdropFilter: "var(--blur-chrome)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        fontSize: "var(--t-small)",
        letterSpacing: "var(--track-micro)",
        color: "var(--text-secondary)"
      }
    }, t.name)), t.tasks.map(task => /*#__PURE__*/React.createElement(TaskBlock, {
      key: task.title,
      title: task.title,
      tone: task.tone,
      priority: task.priority,
      style: {
        gridColumn: task.span
      }
    }))))));
  }
  window.MissionPlanScreen = MissionPlanScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hud_console/MissionPlanScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hud_console/ScanScreen.jsx
try { (() => {
(function () {
  const {
    CornerFrame,
    StatusStrip,
    RulerScale,
    Badge
  } = window.__HAL || {};
  function Blip({
    x,
    y,
    size,
    id
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: x,
        top: y,
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--signal-dim)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-key)",
        color: "var(--text-secondary)"
      }
    }, id));
  }
  function ScanScreen({
    sweep = true
  }) {
    const ring = (d, border) => ({
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      width: d,
      height: d,
      borderRadius: "50%",
      border
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--page-pad)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--sp-7)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: "var(--sp-5)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        border: "1px solid var(--signal)",
        background: "var(--veil-chrome)",
        backdropFilter: "var(--blur-chrome)",
        padding: "16px 22px",
        fontSize: "var(--t-sub)",
        letterSpacing: "var(--track-sub)",
        color: "var(--text-signal)"
      }
    }, "RENAISSANCE R-203"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 320,
        flex: "0 0 320px",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, [["ECHO PROBE-203", "W-Y", true], ["ZETA2 RETICULI", "42 053 740", false]].map(([a, b, hot]) => /*#__PURE__*/React.createElement("div", {
      key: a,
      style: {
        border: "1px solid var(--border-strong)",
        background: "var(--veil-chrome)",
        backdropFilter: "var(--blur-chrome)",
        padding: "9px 16px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-key)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("span", null, a), /*#__PURE__*/React.createElement("span", {
      style: {
        color: hot ? "var(--text-signal)" : undefined
      }
    }, b))))), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--signal-dim)",
        background: "var(--surface-radar)",
        position: "relative",
        height: 560,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(var(--grid-line-radar) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-radar) 1px, transparent 1px)",
        backgroundSize: "112px 112px"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: ring(420, "1px solid rgba(138,106,36,.5)")
    }), /*#__PURE__*/React.createElement("div", {
      style: ring(280, "1px dotted rgba(138,106,36,.6)")
    }), /*#__PURE__*/React.createElement("div", {
      style: ring(140, "1px solid rgba(138,106,36,.35)")
    }), sweep && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 420,
        height: 420,
        marginLeft: -210,
        marginTop: -210,
        borderRadius: "50%",
        animation: "hal-sweep var(--dur-sweep) linear infinite",
        background: "conic-gradient(from 0deg, rgba(227,167,44,.22), rgba(227,167,44,0) 40%)"
      }
    }), /*#__PURE__*/React.createElement(Blip, {
      x: "18%",
      y: "66%",
      size: 9,
      id: "A132"
    }), /*#__PURE__*/React.createElement(Blip, {
      x: "38%",
      y: "24%",
      size: 7,
      id: "A234"
    }), /*#__PURE__*/React.createElement(Blip, {
      x: "62%",
      y: "15%",
      size: 8,
      id: "A345"
    }), /*#__PURE__*/React.createElement(Blip, {
      x: "74%",
      y: "44%",
      size: 7,
      id: "B244"
    }), /*#__PURE__*/React.createElement(Blip, {
      x: "56%",
      y: "80%",
      size: 7,
      id: "A756"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        display: "flex",
        alignItems: "center",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(CornerFrame, {
      tone: "ok",
      thickness: 2,
      inset: -7,
      size: 16,
      style: {
        width: 96,
        height: 96,
        border: "1px solid var(--signal)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: "var(--signal)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        letterSpacing: "var(--track-sub)",
        color: "var(--state-ok)"
      }
    }, "MISSION TARGET"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        letterSpacing: "var(--track-sub)"
      }
    }, "IN RANGE"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-label)",
        color: "var(--text-faint)",
        marginTop: 6
      }
    }, "DEC 0944 6603348 22 / E-203"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 18,
        right: 18,
        bottom: 10
      }
    }, /*#__PURE__*/React.createElement(RulerScale, {
      ticks: 7,
      labels: ["11024", "11234", "11444"]
    }))), /*#__PURE__*/React.createElement(StatusStrip, {
      left: ["00 01 11030", {
        swatches: ["var(--hal-amber-deep)", "var(--signal-dim)", "var(--signal)", "var(--state-ok)"]
      }, "03H18M 12.01853›P", {
        text: "300 23",
        tone: "bright"
      }],
      right: [{
        text: "Lock",
        tone: "ok"
      }, "00014024 00", {
        swatches: ["var(--signal)", "var(--state-ok)", "var(--signal-dim)"]
      }]
    }));
  }
  window.ScanScreen = ScanScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hud_console/ScanScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hud_console/SpecPosterScreen.jsx
try { (() => {
(function () {
  const {
    FocusFrame,
    CalloutLeader
  } = window.__HAL || {};
  function SpecPosterScreen() {
    const corner = {
      fontSize: "var(--t-small)",
      letterSpacing: "var(--track-wide)",
      color: "var(--text-secondary)"
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--page-pad)",
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 820,
        background: "var(--surface-poster)",
        border: "1px solid var(--border-hair)",
        padding: "52px 56px 46px",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        ...corner
      }
    }, /*#__PURE__*/React.createElement("span", null, "HARDER"), /*#__PURE__*/React.createElement("span", null, "FASTER")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        margin: "64px 0 40px"
      }
    }, /*#__PURE__*/React.createElement(FocusFrame, {
      label: "In focus",
      insetX: "8%",
      insetY: "6%",
      style: {
        height: 420,
        border: "1px solid var(--border-strong)",
        backgroundImage: "repeating-linear-gradient(135deg,#14171A 0 10px,#0E1113 10px 20px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-micro)",
        color: "var(--text-faint)"
      }
    }, "[ PRODUCT SHOT \u2014 DROP IMAGE HERE ]")), /*#__PURE__*/React.createElement(CalloutLeader, {
      title: "Carbon case",
      body: "Bone-conduction accelerometers detect the vibration of your jaw when you speak",
      style: {
        position: "absolute",
        left: -6,
        top: -52,
        width: 300
      }
    }), /*#__PURE__*/React.createElement(CalloutLeader, {
      direction: "left",
      title: "Ultra sensor",
      body: "Playback pauses when you take an earbud out and resumes when you put it back in",
      style: {
        position: "absolute",
        right: -6,
        bottom: -66,
        width: 310
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-strong)",
        borderBottom: "1px solid var(--border-strong)",
        display: "flex",
        marginTop: 34
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: "20px 0 22px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-small)",
        letterSpacing: "var(--track-wide)",
        color: "var(--text-secondary)"
      }
    }, "KROLA"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 56,
        fontWeight: "var(--fw-light)",
        letterSpacing: "var(--track-flat)",
        marginTop: 4
      }
    }, "LORD BUDS")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        background: "var(--border-strong)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 220,
        flex: "0 0 220px",
        padding: "20px 0 22px 26px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-small)",
        letterSpacing: "var(--track-wide)",
        color: "var(--text-secondary)"
      }
    }, "PRODUCT"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 56,
        fontWeight: "var(--fw-light)",
        letterSpacing: "var(--track-sub)",
        marginTop: 4
      }
    }, "0001"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        borderBottom: "1px solid var(--border-strong)"
      }
    }, [["DISCOVER :", "Chaotic hum of a crowded room is replaced by the crisp snare and deep bass of your favourite track"], ["UPGRADE :", "Earphones are more than just an audio accessory, they are a portable sanctuary"]].map(([k, v], i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: k
    }, i === 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        background: "var(--border-strong)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        padding: i ? "18px 0 20px 26px" : "18px 22px 20px 0",
        display: "flex",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-label)",
        color: "var(--text-signal)",
        whiteSpace: "nowrap"
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-data)",
        color: "var(--text-secondary)",
        lineHeight: 1.8,
        textTransform: "uppercase"
      }
    }, v))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 26,
        ...corner
      }
    }, /*#__PURE__*/React.createElement("span", null, "BETTER"), /*#__PURE__*/React.createElement("span", null, "STRONGER"))));
  }
  window.SpecPosterScreen = SpecPosterScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hud_console/SpecPosterScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hud_console/TelemetryScreen.jsx
try { (() => {
(function () {
  const {
    Plate,
    MetricCard,
    DataTable,
    DonutGauge,
    LineChart,
    SectionHeader,
    Badge
  } = window.__HAL || {};
  function TelemetryScreen() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--page-pad)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--sp-8)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottom: "1px solid var(--border-hair)",
        paddingBottom: 22,
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      index: "// TELEMETRY",
      title: "HAB 10.2-A"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-title)",
        fontWeight: "var(--fw-light)",
        letterSpacing: "var(--track-flat)"
      }
    }, "HAB AIRLOCK 10.2-A")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        border: "1px solid var(--border-hair)",
        background: "var(--veil-chrome)",
        backdropFilter: "var(--blur-chrome)"
      }
    }, ["03H18M", "300 23"].map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        padding: "12px 18px",
        borderRight: "1px solid var(--border-hair)",
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-key)",
        color: "var(--text-secondary)"
      }
    }, t)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 18px",
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-key)",
        color: "var(--text-signal)"
      }
    }, "STABLE"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: "var(--sp-5)"
      }
    }, /*#__PURE__*/React.createElement(MetricCard, {
      label: "O2 trunk",
      value: "56",
      unit: "%",
      meter: 56
    }), /*#__PURE__*/React.createElement(MetricCard, {
      label: "CO2 levels",
      value: "0.49",
      meter: 18,
      tone: "ok"
    }), /*#__PURE__*/React.createElement(MetricCard, {
      label: "D1 pressure",
      value: "28.2",
      unit: "PSI",
      meter: 70
    }), /*#__PURE__*/React.createElement(MetricCard, {
      label: "Val. sensor",
      value: "35",
      unit: "%",
      meter: 35,
      tone: "fault"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr",
        gap: "var(--sp-5)"
      }
    }, /*#__PURE__*/React.createElement(Plate, {
      label: "Oxygen flow / 24h",
      meta: "BOOSTING",
      padding: "var(--pad-plate-lg)",
      style: {
        minHeight: 330,
        gap: "var(--sp-6)"
      }
    }, /*#__PURE__*/React.createElement(LineChart, {
      height: 190,
      series: [{
        points: [[0, 150], [75, 132], [150, 140], [225, 96], [300, 110], [375, 64], [450, 72], [525, 38], [600, 44]]
      }],
      baseline: [[0, 178], [75, 170], [150, 175], [225, 158], [300, 166], [375, 150], [450, 156], [525, 142], [600, 148]],
      labels: ["00:00", "06:00", "12:00", "18:00", "24:00"]
    })), /*#__PURE__*/React.createElement(Plate, {
      label: "Cabin mix",
      padding: "var(--pad-plate-lg)",
      style: {
        minHeight: 330,
        alignItems: "center",
        justifyContent: "center",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(DonutGauge, {
      value: "22.2%",
      label: "Oxygen",
      segments: [{
        pct: 22,
        color: "var(--signal)"
      }, {
        pct: 8,
        color: "var(--state-ok)"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: "stretch",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-key)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "N2 68.9"), /*#__PURE__*/React.createElement("span", null, "O2 22.2"), /*#__PURE__*/React.createElement("span", null, "OTHER 8.9")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "signal"
    }, "Scanning"), /*#__PURE__*/React.createElement(Badge, {
      tone: "ok"
    }, "Lock"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-key)",
        color: "var(--text-faint)"
      }
    }, "// CREW VITALS / POLLING 4HZ")), /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        label: "Crew",
        width: "1.4fr"
      }, {
        label: "BP"
      }, {
        label: "PR"
      }, {
        label: "TP"
      }, {
        label: "Helmet",
        muted: true
      }],
      rows: [{
        cells: ["Lewis", "34.2", "12.8", "33.7", "8.204"]
      }, {
        cells: ["Vogel", "31.4", "12.4", "34.0", "6.478"]
      }, {
        cells: ["Watney", "30.2", "13.5", "—", "Bad packet"],
        tone: "fault"
      }, {
        cells: ["Johanssen", "32.6", "11.8", "34.0", "7.696"]
      }]
    }));
  }
  window.TelemetryScreen = TelemetryScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hud_console/TelemetryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/spec_sheet/SpecSheetScreen.jsx
try { (() => {
(function () {
  const {
    Button,
    Plate,
    Slider,
    SectionHeader,
    BrandMark
  } = window.__HAL || {};
  const ROWS = [["GRN TYPE 77", "567", false], ["GEO REC INF", "444", false], ["BPS BOUND H-4", "54.8", true], ["TERMINAL PORT", "9985", false]];
  function SpecSheetScreen() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100vh",
        padding: "64px 72px 110px",
        backgroundImage: "radial-gradient(var(--grid-line) 1px, transparent 1px)",
        backgroundSize: "26px 26px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "var(--sp-10)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--hal-graphite)",
        color: "var(--text-on-solid)",
        padding: "12px 20px",
        fontSize: "var(--t-sub)",
        letterSpacing: "var(--track-sub)"
      }
    }, "EE/3.44.2 PL-M"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-hair)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-micro)",
        letterSpacing: "var(--track-micro)",
        color: "var(--text-secondary)"
      }
    }, "FRAME GUI V1 223-22-2.00")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--sp-10)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-hero)",
        fontWeight: "var(--fw-hairline)",
        letterSpacing: "var(--track-tight)",
        lineHeight: 1
      }
    }, "B17X"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-sub)",
        letterSpacing: "var(--track-sub)",
        color: "var(--text-signal)"
      }
    }, "SYNTHESIS PORT B3"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-small)",
        letterSpacing: "var(--track-key)",
        color: "var(--text-secondary)"
      }
    }, "NO. 990-22-2.11")), /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: "end"
      }
    }, ROWS.map(([k, v, hot]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "11px 0",
        borderBottom: "1px solid var(--border-hair)",
        fontSize: "var(--t-small)",
        letterSpacing: "var(--track-nav)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: hot ? "var(--signal-dim)" : "var(--text-secondary)"
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        color: hot ? "var(--signal-dim)" : undefined
      }
    }, v))))), /*#__PURE__*/React.createElement(SectionHeader, {
      index: "SEC 02",
      title: "Measured"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "var(--sp-5)"
      }
    }, /*#__PURE__*/React.createElement(Plate, {
      label: "ATC comm",
      frosted: false
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-metric-sm)",
        fontWeight: "var(--fw-hairline)"
      }
    }, "87", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: "var(--text-secondary)"
      }
    }, " MM"))), /*#__PURE__*/React.createElement(Plate, {
      label: "ATC comm",
      frosted: false
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-metric-sm)",
        fontWeight: "var(--fw-hairline)"
      }
    }, "84", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: "var(--text-secondary)"
      }
    }, " MM"))), /*#__PURE__*/React.createElement(Plate, {
      label: "Processing data",
      frosted: false,
      style: {
        gridColumn: "span 2"
      }
    }, /*#__PURE__*/React.createElement(Slider, {
      value: 74,
      showValue: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-small)",
        letterSpacing: "var(--track-nav)",
        color: "var(--text-secondary)"
      }
    }, "74% / PLASMA APP 90.23"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--sp-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--t-title)",
        fontWeight: "var(--fw-light)",
        letterSpacing: "var(--track-flat)",
        color: "var(--text-signal)"
      }
    }, "VPN LOG X4.22.00.1"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--sp-4)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      tone: "primary",
      size: "sm"
    }, "Engage"), /*#__PURE__*/React.createElement(Button, {
      tone: "standby",
      size: "sm"
    }, "Standby"), /*#__PURE__*/React.createElement(Button, {
      tone: "ghost",
      size: "sm",
      disabled: true
    }, "Disabled")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 440,
        fontSize: "var(--t-small)",
        lineHeight: "var(--lh-print)",
        color: "var(--text-secondary)",
        fontWeight: "var(--fw-light)"
      }
    }, "The light variant keeps the same rules and plates, drops the amber to a muted sage, and prints legibly. Use it for documentation, spec sheets and any surface that will be exported to paper."), /*#__PURE__*/React.createElement(BrandMark, {
      sub: "LIGHT MODE / PRINT SAFE",
      style: {
        marginTop: "var(--sp-5)"
      }
    }))));
  }
  window.SpecSheetScreen = SpecSheetScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/spec_sheet/SpecSheetScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Plate = __ds_scope.Plate;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.BarSegments = __ds_scope.BarSegments;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DonutGauge = __ds_scope.DonutGauge;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.RulerScale = __ds_scope.RulerScale;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.CalloutLeader = __ds_scope.CalloutLeader;

__ds_ns.CornerFrame = __ds_scope.CornerFrame;

__ds_ns.FocusFrame = __ds_scope.FocusFrame;

__ds_ns.GridField = __ds_scope.GridField;

__ds_ns.TaskBlock = __ds_scope.TaskBlock;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.StatusStrip = __ds_scope.StatusStrip;

})();
