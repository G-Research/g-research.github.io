import {copyFile, mkdir, readFile, writeFile} from 'node:fs/promises'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')

// --- 1. the data endpoint ---------------------------------------------
const dataPath = resolve(root, 'src/data/repositories.json')
const data = JSON.parse(await readFile(dataPath, 'utf8'))

// A collection run that succeeds but returns nothing would otherwise build
// and deploy a site with no projects on it, and nothing downstream notices.
if (!Array.isArray(data?.data) || data.data.length === 0) {
    throw new Error('postbuild: repositories.json has no records — refusing to build an empty site')
}

await mkdir(resolve(dist, 'data'), {recursive: true})
await copyFile(dataPath, resolve(dist, 'data/repositories.json'))

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

console.log(`postbuild: wrote dist/data/repositories.json (${data.data.length} records) and dist/404.html`)