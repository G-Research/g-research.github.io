import {createTheme, virtualColor} from '@mantine/core'

/**
 * Mantine theme. Covers what Mantine itself owns: palettes, radius, shadows,
 * fonts. Anything Mantine has no token for (sidebar background, frosted nav)
 * lives in global.css as a CSS variable.
 *
 * Mantine requires 10 shades per colour even where only a few are used.
 * The indices that matter for the neutrals:
 *   dark[7] = body background
 *   dark[6] = cards, inputs, surfaces
 *   dark[4] = borders
 *   dark[2] = dimmed text
 *   dark[0] = primary text
 */
export const theme = createTheme({
    colors: {
        /* Shades 4–6 are all the exact neon. Mantine's `subtle` and `light`
           variants reach for shade 4 rather than primaryShade, and a normal
           ramp puts a washed-out pale yellow there — which is why the social
           icons rendered near-white in dark mode. */
        lime: [
            '#f4f6de', '#f0f4d7', '#ebf1c2', '#e6efab', '#e1ee94',
            '#deee7b', '#e5fc54', '#dcfb17', '#b5d104', '#819503',
        ],

        royal: [
            '#ecedf9', '#ced2f0', '#afb5ea', '#8e96e5',
            '#4655e1', '#1f34f5', '#0f25f2', '#0b1dc7',
            '#08179a', '#06106e',
        ],

        /* Mantine has no native per-scheme colour, and the accent has to
           differ: lime is 1.14:1 on white (invisible) and royal blue is
           2.34:1 on #0f0f0f (fails). virtualColor resolves per scheme. */
        accent: virtualColor({
            name: 'accent',
            light: 'royal',
            dark: 'lime',
        }),

        dark: [
            '#ffffff', // 0  text
            '#e4e4e8', // 1
            '#8e8e9a', // 2  textSub — 5.9:1 on bg, passes AA
            '#6a6a76', // 3
            '#2b2b30', // 4  border
            '#242428', // 5  surfaceHov
            '#1c1c1e', // 6  surface — cards, inputs, footer
            '#0f0f0f', // 7  bg — page background
            '#0a0a0a', // 8
            '#050505', // 9
        ],

        gray: [
            '#ffffff', // 0  bg
            '#f9f9f9', // 1  surface
            '#f4f4f7', // 2  sidebar
            '#f0f0f4', // 3  surfaceHov
            '#e2e2e6', // 4  border
            '#c0c0cc', // 5  textMuted
            '#8a8a94', // 6
            '#555560', // 7  textSub — 7.4:1 on white, passes AA
            '#2a2a30', // 8
            '#0a0a0a', // 9  text
        ],
    },

    /* Every component that uses the primary colour — Checkbox, ActionIcon
       subtle, Select, focus rings — reads this. Setting it once is why none
       of those need per-component classes. */
    primaryColor: 'accent',

    /* Default is {light: 6, dark: 8}. Shade 8 of the lime ramp is a dark
       olive, not the neon, so pin both to 6. */
    primaryShade: 6,

    /* Picks black or white text on accent fills automatically: black on lime
       (17.3:1), white on royal blue (8.2:1). */
    autoContrast: true,

    defaultRadius: 'md',
    radius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '20px',
    },

    /* Point at the CSS variables rather than using light-dark() here.
       These are JavaScript strings that never pass through postcss, so
       light-dark() would be emitted raw and silently do nothing. */
    shadows: {
        sm: 'var(--shadow-card)',
        md: 'var(--shadow-card)',
        lg: 'var(--shadow-card-hover)',
    },

    headings: {
        fontWeight: '700',
        sizes: {
            h1: {fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: '1.05'},
            h2: {fontSize: 'clamp(1.3rem, 2.4vw, 1.7rem)', lineHeight: '1.2'},
        },
    },

    // System fonts for now. Swap here once the licence question is settled.
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',

    /* Keyboard focus ring. Not in the Figma token list, but required by
       WCAG 2.4.7 — without this it falls back to the browser default. */
    focusRing: 'auto',

    other: {
        navHeight: 60,
    },
})