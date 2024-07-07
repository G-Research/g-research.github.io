import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    pathPrefix: process.env.PATH_PREFIX, // add a prefix to all paths
    siteMetadata: {
        // metadata
        title: `G-Research`,
        description: `Open-Source Software at G-Research`,
        siteUrl: `https://g-research.github.io`, // where site is hosted
        repositoryUrl: `https://github.com/G-Research/g-research.github.io`, // where the source code is hosted
        generatedAt: new Date(),
        // social links
        githubUrl: `https://github.com/G-Research`,
        xUrl: `https://x.com/oss_gr`,
        youtubeUrl: `https://www.youtube.com/@oss-gr`,
        // footer links
        joinUsUrl: `https://www.gresearch.com/vacancies/?specialism=software+engineering`,
        websiteUrl: `https://opensource.gresearch.com`,
        blogUrl: `https://www.gresearch.com/news/category/open-source-software`,
        careersUrl: `https://www.gresearch.com/vacancies/`,
        // featured projects
        featured: [
            "armadaproject/armada",
            "m4rs-mt/ILGPU",
            "G-Research/fasttrackml",
            "G-Research/consuldotnet",
            "G-Research/ParquetSharp",
        ],
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-tsconfig-paths`, // add support for imports alias with TypeScript
        `gatsby-plugin-dts-css-modules`, // add support for CSS modules with TypeScript
    ]
};

// noinspection JSUnusedGlobalSymbols
export default config;
