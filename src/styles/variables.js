export const sp = {
  xxmSpacing: "0.625rem",
  xmSpacing: "1rem",
  smSpacing: "1.25rem",
  mdSpacing: "1.5rem",
  lgSpacing: "2.5rem",
  xlSpacing: "3.75rem",
  xxlSpacing: "4.375rem",
  xxxlSpacing: "6.25rem",
};

export const spContainer = {
  mdSpacing: "5rem",
  lgSpacing: "6.25rem",
  xlSpacing: "12.5rem",
};

export const fs = {
  fs700: "clamp(1.13rem, calc(0.17rem + 4.07vw), 3.00rem)",
  fs600: "clamp(1.13rem, calc(0.55rem + 2.44vw), 2.25rem)",
  fs500: "clamp(0.88rem, calc(0.72rem + 0.65vw), 1.50rem)",
  fs400: "clamp(0.75rem, calc(0.66rem + 0.39vw), 1.13rem)",
  fs300: "clamp(0.75rem, calc(0.72rem + 0.13vw), 0.88rem)",
  fs200: "0.75rem",
};

export const s = {
  xxl: "91.25em",
  xl: "75em",
  lg: "64em",
  md: "48em",
  sm: "37.5em",
};

// BREAKPOINTS
export const b = {
  xxl: `(min-width: ${s.xxl})`,
  xl: `(min-width: ${s.xl})`,
  lg: `(min-width: ${s.lg})`,
  md: `(min-width: ${s.md})`,
  sm: `(min-width: ${s.sm})`,
};

export const bd = {
  xxl: `(max-width: ${s.xxl})`,
  xl: `(max-width: ${s.xl})`,
  lg: `(max-width: ${s.lg})`,
  md: `(max-width: ${s.md})`,
  sm: `(max-width: ${s.sm})`,
};
