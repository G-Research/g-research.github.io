import {createTheme} from '@mantine/core'

/**
 * Mantine theme. Only covers what Mantine itself owns: palettes, radius,
 * shadows, fonts. Anything Mantine has no token for (accent colour, sidebar
 * background, frosted nav) lives in global.css as a CSS variable.
 *
 * Mantine requires 10 shades per colour even where only a few are used.
 * The indices that actually matter:
 *   dark[7] = body background
 *   dark[6] = cards, inputs, surfaces
 *   dark[4] = borders
 *   dark[2] = dimmed text
 *   dark[0] = primary text
 */
export const theme = createTheme({
    // Design tokens
    colors:{
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
    // `accent` is defined in global.css via light-dark(), because Mantine has
    // no native per-scheme colour and the value differs by mode:
    //   dark  → lime  #e5fc54  (16.8:1 on #0f0f0f)
    //   light → blue  #0f25f2  (8.2:1 on #ffffff)
    // Lime is unusable in light mode (1.14:1 on white), hence the split.

    defaultRadius: 'md',
    radius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '20px',
    },

    // Matched to the Figma shadow tokens
    shadows: {
        sm: '0 1px 2px light-dark(rgba(0,0,0,.07), rgba(0,0,0,.4))',
        md: '0 4px 12px light-dark(rgba(0,0,0,.07), rgba(0,0,0,.4)), 0 1px 3px light-dark(rgba(0,0,0,.07), rgba(0,0,0,.8))',
        lg: '0 8px 24px light-dark(rgba(0,0,0,.1), rgba(0,0,0,.55)), 0 2px 6px light-dark(rgba(0,0,0,.12), rgba(0,0,0,.9))',
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

    // Keyboard focus ring. Not in the Figma token list, but required by
    // WCAG 2.4.7 — without this it falls back to the browser default.
    focusRing: 'auto',

    other: {
        // Values components can read via useMantineTheme().other
        navHeight: 60,
    },
})