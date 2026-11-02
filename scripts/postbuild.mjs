import {copyFile, mkdir, readFile, writeFile} from 'node:fs/promises'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')

// --- 1. the data endpoint ---------------------------------------------
await mkdir(resolve(dist, 'data'), {recursive: true})
await copyFile(
    resolve(root, 'src/data/repositories.json'),
    resolve(dist, 'data/repositories.json'),
)

// --- 2. the 404 page --------------------------------------------------
const html = await readFile(resolve(dist, 'index.html'), 'utf8')

const notFound = html
    .replace(/<title>[^<]*<\/title>/, '<title>Page not found · G-Research</title>')
    // A canonical pointing at "/" would tell crawlers every missing path is
    // the home page.
    .replace(/[ \t]*<link rel="canonical"[^>]*>\n?/, '')

if (notFound === html) {
    throw new Error('postbuild: 404.html would be identical to index.html — check the <title> and canonical patterns')
}

await writeFile(resolve(dist, '404.html'), notFound)

console.log('postbuild: wrote dist/data/repositories.json and dist/404.html')