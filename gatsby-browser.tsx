import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import * as React from "react";
import type {GatsbyBrowser} from "gatsby";
import {MantineProvider} from '@mantine/core';
import {theme} from "@core/theme";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({element}) => {
    return <MantineProvider theme={theme} defaultColorScheme="auto">{element}</MantineProvider>;
};
