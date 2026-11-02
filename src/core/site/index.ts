/**
 * Site metadata. Replaces the `siteMetadata` block in gatsby-config.ts, which
 * used to reach these values through a GraphQL page query.
 *
 * Note: `builtAt` deliberately does NOT live here. In Gatsby, `new Date()` in
 * the config was evaluated once at build time. In a plain module it would be
 * evaluated in the browser on every page load, which would silently break the
 * "data collected X ago" display. The primary source is `COLLECTED_AT` from
 * repositories.json; if a build timestamp is ever genuinely needed, inject it
 * via Vite's `define` rather than adding it here.
 */


export const site = {
    // metadata
    title: 'G-Research',
    description: 'Open-Source Software at G-Research',
    siteUrl: 'https://g-research.github.io',
    repositoryUrl: 'https://github.com/G-Research/g-research.github.io',

    // social links
    githubUrl: 'https://github.com/G-Research',
    xUrl: 'https://x.com/oss_gr',
    youtubeUrl: 'https://www.youtube.com/@oss-gr',

    // footer links
    joinUsUrl: 'https://www.gresearch.com/vacancies/?specialism=software+engineering',
    websiteUrl: 'https://opensource.gresearch.com',
    blogUrl: 'https://www.gresearch.com/news/category/open-source-software',
    careersUrl: 'https://www.gresearch.com/vacancies/',

    // featured projects, matched case-insensitively against Repository.id
    featured: [
        'armadaproject/armada',
        'm4rs-mt/ILGPU',
        'G-Research/consuldotnet',
        'G-Research/ParquetSharp',
    ],
} as const