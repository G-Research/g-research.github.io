import type {GatsbyConfig} from "gatsby";

console.log(`process.env.PATH_PREFIX: ${process.env.PATH_PREFIX}`);

const config: GatsbyConfig = {
    pathPrefix: process.env.PATH_PREFIX || ``, // add a prefix to all paths
    siteMetadata: {
        title: `G-Research`,
        description: `Open-Source Software at G-Research`,
        siteUrl: `https://g-research.github.io`, // where site is hosted
        repositoryUrl: `https://github.com/G-Research/g-research.github.io`, // where the source code is hosted
        // social links
        websiteUrl: `https://opensource.gresearch.com`,
        blogUrl: `https://www.gresearch.com/news/category/open-source-software`,
        careersUrl: `https://www.gresearch.com/vacancies/`,
        githubUrl: `https://github.com/G-Research`,
        xUrl: `https://x.com/oss_gr`,
        youtubeUrl: `https://www.youtube.com/@oss-gr`,
        joinUsUrl: `https://www.gresearch.com/vacancies/?specialism=software+engineering`,
        generatedAt: new Date(),
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

export default config;
