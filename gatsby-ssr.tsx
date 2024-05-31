import * as React from "react"
import type {GatsbySSR} from "gatsby"
import {ColorSchemeScript, MantineProvider} from '@mantine/core'
import {theme} from "@core/theme"

export const onPreRenderHTML: GatsbySSR["onPreRenderHTML"] = ({getHeadComponents, replaceHeadComponents}) => {
    const headComponents = getHeadComponents();
    replaceHeadComponents([
        ...headComponents,
        <ColorSchemeScript key="color-scheme-script" defaultColorScheme="auto"/>,
    ]);
};
export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({element}) => {
    return <MantineProvider theme={theme} defaultColorScheme="auto">{element}</MantineProvider>;
};
