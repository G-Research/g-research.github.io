<div align="center">
  <a href="https://g-research.github.io/">
    <img alt="G-Research" src="https://github.com/G-Research/brand/raw/main/logo/GR-OSS/logo.svg" height="128" />
  </a>
   <h1>Open-Source at G-Research</h1>
   <p>For a prettier and more inviting experience of looking at GR's current open-source projects.</p>
</div>

# Organization website

This repository contains the source code for the G-Research organization website.

The website is built using [Gatsby](https://www.gatsbyjs.com/), hosted on [GitHub Pages](https://pages.github.com/), and
published at [g-research.github.io/](https://g-research.github.io/).

## Features

- [x] Showcases G-Research's open-source projects
- [x] Automatically collects and processes repository data from the GitHub API
- [x] Allows custom overrides for repository information
- [x] Supports custom logos for repositories

## Repository data

The website automatically fetches data for G-Research's open-source projects from the GitHub API. This data is processed
and stored in the [`static/data/`](./static/data/) directory in JSON format, which is then used to generate the website.

### Overriding repository data

You can customize the information for specific repositories by adding entries
to [`static/data/custom_values.json`](./static/data/custom_values.json) where the key is the repository's full name and
the value is an object containing the data to override. This is especially useful for:

- Setting Discord URLs, Slack URLs, website URLs...
- Adding custom descriptions

When overriding data, ensure you follow the schema defined in [`src/core/types/index.ts`](./src/core/types/index.ts).

### Custom logos

To use a custom logo for a repository:

1. Create an SVG file named after the repository
2. Place it in a folder named after the organization within the [`static/hosted_logos/`](./static/hosted_logos/)
   directory
3. Make sure all folder and file names are lowercase

*Example*:
For the repository `G-Research/g-research.github.io`, the custom logo should be located
at: `static/hosted_logos/g-research/g-research.github.io.svg`.

> Custom logos will be used instead of the organization's GitHub avatar.

## Development

This project is built using Gatsby, a React-based static site generator. It uses TypeScript
and [Mantine](https://mantine.dev/) UI components.

### 🚀 Quick start

### Install dependencies

```shell
yarn install
```

### Start developing

```shell
yarn run develop
```

### Open the code and start customizing!

Your site is now running at [http://localhost:8000](http://localhost:8000)!

Edit your code to see your site update in real-time!

### Learn more about Gatsby

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## License

This project is licensed under the [MIT License](./LICENSE).