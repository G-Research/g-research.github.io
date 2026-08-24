import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {MantineProvider} from '@mantine/core'
import App from './App'

import '@mantine/core/styles.css'

const container = document.getElementById('root')
if (!container) throw new Error('#root not found in index.html')

createRoot(container).render(
    <StrictMode>
        <MantineProvider defaultColorScheme="auto">
            <App/>
        </MantineProvider>
    </StrictMode>,
)
