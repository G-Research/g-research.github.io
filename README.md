<div align="center">
  <a href="https://g-research.github.io/">
    <img alt="G-Research" src="https://github.com/G-Research/brand/raw/main/logo/GR-OSS/logo.svg" height="72" />
  </a>
  <h1>Open-Source at G-Research</h1>
  <p>Explore G-Research's open-source projects and learn more about us.</p>

  <a href="https://github.com/G-Research/g-research.github.io/actions/workflows/build_and_publish.yml"><img alt="Build and deploy" src="https://github.com/G-Research/g-research.github.io/actions/workflows/build_and_publish.yml/badge.svg" /></a>
  <a href="https://g-research.github.io/"><img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fg-research.github.io&label=website" /></a>
  <a href="./LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-blue.svg" /></a>
  <br />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img alt="Mantine" src="https://img.shields.io/badge/Mantine-339AF0?logo=mantine&logoColor=white" />
  <img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-222222?logo=githubpages&logoColor=white" />
</div>

# Website Purpose

This repository contains the source code for the G-Research open-source website.

The website is built with [Vite](https://vite.dev/), [React](https://react.dev/), and [Mantine](https://mantine.dev/),
hosted on [GitHub Pages](https://pages.github.com/), and published at
[g-research.github.io/](https://g-research.github.io/).

### Featured projects

<a href="https://github.com/armadaproject/armada"><img alt="Armada" src="https://img.shields.io/github/stars/armadaproject/armada?label=Armada&style=flat" /></a>
<a href="https://github.com/m4rs-mt/ILGPU"><img alt="ILGPU" src="https://img.shields.io/github/stars/m4rs-mt/ILGPU?label=ILGPU&style=flat" /></a>
<a href="https://github.com/G-Research/consuldotnet"><img alt="Consul.NET" src="https://img.shields.io/github/stars/G-Research/consuldotnet?label=Consul.NET&style=flat" /></a>
<a href="https://github.com/G-Research/ParquetSharp"><img alt="ParquetSharp" src="https://img.shields.io/github/stars/G-Research/ParquetSharp?label=ParquetSharp&style=flat" /></a>

## Features

- [x] Showcases G-Research's open-source projects
- [x] Automatically collects and processes repository data from the GitHub API
- [x] Allows custom overrides for repository information
- [x] Supports custom logos for repositories

## Repository data

The website automatically fetches data for G-Research's open-source projects from the GitHub API. This data is processed
and stored in the [`src/data/`](./src/data/) directory in JSON format, which is then used to generate the website.

### Overriding repository data

You can customize the information for specific repositories by adding entries
to [`src/data/custom_values.json`](./src/data/custom_values.json) where the key is the repository's full name and
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

This project is built with Vite and React. It uses TypeScript and [Mantine](https://mantine.dev/) UI components.
It requires Node 22 and Yarn 1.x.

### 🚀 Quick start

### Install dependencies

```shell
yarn install
```

### Start developing

```shell
yarn develop
```

### Open the code and start customizing!

Your site is now running at [http://localhost:9000](http://localhost:9000)!

Edit your code to see your site update in real-time!

### Commands

| Command          | What it does                                               |
|------------------|------------------------------------------------------------|
| `yarn install`   | Install dependencies                                       |
| `yarn develop`   | Start the development server at http://localhost:9000      |
| `yarn build`     | Build the production site into `dist/`                     |
| `yarn serve`     | Preview the production build at http://localhost:9000      |
| `yarn typecheck` | Check TypeScript types                                     |
| `yarn clean`     | Remove build output and the Vite cache                     |

### Before pushing

Run these from the repository root. The first three stop with an error if something is wrong.

```shell
yarn typecheck    # type errors
yarn build        # build errors
yarn audit        # known vulnerabilities in dependencies
yarn serve        # preview the production build
```

Then open [http://localhost:9000](http://localhost:9000) and check that the page loads, search and filters work, and
both color schemes look right.

If you added, removed, or upgraded dependencies, start from a clean install first so nothing stale is left behind:

```shell
rm -rf node_modules dist
yarn install
```

### Learn more

- [Vite documentation](https://vite.dev/guide/)
- [React documentation](https://react.dev/learn)
- [Mantine documentation](https://mantine.dev/getting-started/)

## License

This project is licensed under the [MIT License](./LICENSE).