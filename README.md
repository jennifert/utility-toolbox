# Utility Toolbox

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9-purple?logo=eslint)](https://eslint.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**Utility Toolbox** is a privacy-first collection of practical browser-based utilities.

Small tools you can trust.

This project is designed to stay simple, lightweight, and respectful of user privacy:
- no ads
- no tracking
- local-first processing where possible
- no unnecessary server-side work for local tasks

🚧 Early project setup is in progress. Initial tools and pages are being built now.

---

## Table of Contents

- [Requirements](#requirements)
- [Version Information](#version-information)
- [Current Stack](#current-stack)
- [Project Goals](#project-goals)
- [Quick Start](#quick-start)
- [Linting](#linting)
- [Project Structure](#project-structure)
- [Planned Tools](#planned-tools)
- [Privacy Approach](#privacy-approach)
- [Deployment Notes](#deployment-notes)
- [Project Notes](#project-notes)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Requirements

- Node.js: 20.x, 22.x, or 24.x
- npm: recent version recommended

## Version Information

- Next.js: 16.x
- React / React DOM: 19.x
- ESLint: 9.x

## Current Stack

This project currently uses:

- **Next.js** for routing and static page generation
- **React** for components
- **Plain JavaScript pages** for a lightweight setup
- **ESLint** for linting

Planned styling approach:
- lightweight local CSS
- simple, readable layouts
- no unnecessary external dependencies
- privacy-first defaults

## Project Goals

Utility Toolbox aims to provide small, practical browser-based utilities that are easy to use and easy to trust.

Key goals include:

- **Privacy-first design**
- **Local-first processing where possible**
- **No ads or tracking**
- **Open source code**
- **Simple deployment**
- **Easy future expansion**

The first release is intended to focus on a small set of useful tools rather than a large collection all at once.

## Quick Start

1. Clone the repo:

   ```bash
   git clone https://github.com/jennifert/utility-toolbox.git
   cd utility-toolbox
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build the site:

   ```bash
   npm run build
   ```

5. Start the production server locally:

   ```bash
   npm run start
   ```

## Linting

Run ESLint with:

```bash
npm run lint
```

## Project Structure

This project is planned as a small tools hub with standard Next.js pages and individual utility pages.

### Main pages

Top-level pages are expected to live in `pages/`, for example:

- `pages/index.js`
- `pages/about.js`
- `pages/privacy.js`

### Tool pages

Utility pages may live in `pages/tools/`, for example:

- `pages/tools/image-ratio.js`
- `pages/tools/mailto-encoder.js`

### Project files

Other important files may include:

- `README.md`
- `TODO.md`
- `CHANGELOG.md`
- `LICENSE`

## Planned Tools

Initial MVP tools:

- **Image ratio calculator**
  - preserve aspect ratio calculations
  - optional local image upload for reading dimensions in-browser
  - no image upload to a server for local dimension checks

- **Mailto encoder**
  - generate encoded `mailto:` links
  - simplify email link creation for HTML use

Planned later tools may include:

- date and time calculations
- timezone conversions
- Celsius / Fahrenheit conversions

## Privacy Approach

Privacy is a core part of this project.

Utility Toolbox is intended to:
- avoid ads
- avoid tracking
- avoid unnecessary external assets where practical
- process local tasks in the browser when possible

For example, if a tool allows a user to choose an image in order to read width and height, that file should be processed locally in the browser only and not uploaded to a server for routine calculations.

Settings and preferences may later be stored locally in the browser for convenience.

## Deployment Notes

This site is intended to be deployed as a simple Next.js project, with static-friendly configuration where practical.

Deployment target:
- **DigitalOcean**

As the project grows, deployment notes may be expanded to document:
- static export behavior
- cache/header considerations
- domain setup
- release workflow

## Project Notes

See [TODO.md](./TODO.md) for the current task list and planned features, and [CHANGELOG.md](./CHANGELOG.md) for project updates.

Bug reports, feature requests, and feedback are intended to go through GitHub Issues.

## License

**Code** is licensed under the [MIT License](./LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/) for the site framework
- [React](https://react.dev/) for the UI layer
- [Shields.io](https://shields.io/) for README badges
- [Awesome README](https://github.com/matiassingers/awesome-readme) for formatting inspiration