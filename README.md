# Next.js Template

![Build](https://github.com/ReeceRose/next.js-template/workflows/Build/badge.svg?branch=main)
[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)](https://github.com/ReeceRose/next.js-template/blob/main/LICENSE)

*Next.js template with TypeScript, Jest, ESLint, Prettier, and TailwindCSS already configured. Requires little configuration to get up and coding*

## About

I decided to create this template as I noticed in every Next.js application I created I always included the following extras: Jest, ESLint, Prettier, TailwindCSS, and husky. Having a template that's up-to date and configured exactly how I want it to be will save a lot of time when creating new applications and I hope it can help you as well. This template is also setup to only require a few configuration changes, so you can get up and running and not have to worry about boilerplate code.

I plan on keeping this repository up-to-date with the latest releases from the library as well as with any modifications I make to future projects that I feel will be useful to this template.

## Stack

 - React (UI library)
 - Next (Universal/server-side rendered React)
 - TailwindCSS (Utility-first CSS framework)

### Other technologies

 - Jest (Testing library)
 - ESLint (Linter tool)
 - Prettier (Code formatter)
 - Husky (Utility for Git Hooks)

## Setup

### Prerequisites

 - [Git](https://git-scm.com/downloads)
 - [Node.js](https://nodejs.org/en/) (Currently tested with 16.13.0, but future/previous versions will likely work)
 - [yarn](https://classic.yarnpkg.com/en/docs/install/) (NPM will work, but I prefer yarn)

### Install

In a folder with the name of your choice, run:

```bash
# Clone the repository into your project folder
https://github.com/ReeceRose/next.js-template.git .

# Flush git project
rm -rf .git # del .git on Windows with Command Prompt

# Initialize new git project
git init

# Install dependencies
yarn install
```

### Configuration

Now, we can do the little configuration required

 - In your IDE/text editor, search for 'CHANGE_ME' and update/remove it accordingly
 - Copy .env.example to .env.local and set 'SITE_URL' equal to 'http://localhost:3000' for development 

 *Note, there are a lot of images under the public folder that will eventually need to be replaced (currently all Next.js logos). These files are used for metadata and SEO, so they should all be individually replaced and not just deleted*

### Run

Finally, we can run the project and start coding. To run development build, run:

```bash
yarn dev
```

### Test

To ensure everything is working as expected, you can run unit tests. These will also be executed via GitHub Actions.

To run the tests, run:
```bash
yarn test
```

To watch the tests, run:
```bash
yarn test:watch
```

### Docker

To create a production ready docker container, run:
```bash
docker build . -t next.js-template
```

Now you can tag/push your repository to a repository.

To run locally (or on a server after pulling from repository), run:
```bash
docker run -p 3000:3000 next.js-template
```

## Usage in monorepo as a nested folder

Currently, if this is cloned into a monorepo as a nested folder (example: web/) the build won't run. In addition to the build not running, husky does not work properly. To get a successful build, follow these instructions

- Move .github/ folder to root of monorepo
- Add the following to the `packages.json` file in this folder: `"prepare": "cd ../ && husky install web/.husky"` while removing the `"postinstall": "husky install"` line
- Replace the contents of `./husky/pre-commit` with the following:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
cd web
echo "[Husky] pre-commit" && yarn pre-commit
``` 

## Issues

Have any issue or suggestion? Feel free to open an issue [here](https://github.com/ReeceRose/next.js-template/issues/new)
