import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ColorSchemeScript, MantineProvider} from '@mantine/core'
import App from './App'
import {theme} from './theme'

import '@mantine/core/styles.css'
import './global.css'   // after Mantine, so our overrides win

const container = document.getElementById('root')
if (!container) throw new Error('#root not found in index.html')

createRoot(container).render(
    <StrictMode>
        <ColorSchemeScript defaultColorScheme="auto"/>
        <MantineProvider theme={theme} defaultColorScheme="auto">
            <App/>
        </MantineProvider>
    </StrictMode>,
)