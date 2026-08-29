# Utility Toolbox

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9-purple?logo=eslint)](https://eslint.org/)
[![Pico
CSS](https://img.shields.io/badge/Pico_CSS-v2-0E7490)](https://picocss.com/)
[![License:
MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

**Utility Toolbox** is a privacy-first collection of practical
browser-based utilities.

Small tools you can trust.

This project is designed to stay simple, lightweight, and respectful of
user privacy:

-   no ads
-   no tracking
-   local-first processing where possible
-   no unnecessary server-side work for local tasks

🚧 Utility Toolbox is under active development. The first browser-based
tools are now available, with additional utilities planned for future
releases.

------------------------------------------------------------------------

## Table of Contents

-   [Requirements](#requirements)
-   [Version Information](#version-information)
-   [Current Stack](#current-stack)
-   [Project Goals](#project-goals)
-   [Quick Start](#quick-start)
-   [Linting](#linting)
-   [Project Structure](#project-structure)
-   [Available Tools](#available-tools)
-   [Planned Tools](#planned-tools)
-   [Privacy Approach](#privacy-approach)
-   [Deployment Notes](#deployment-notes)
-   [Project Notes](#project-notes)
-   [License](#license)
-   [Acknowledgments](#acknowledgments)

## Requirements

-   Node.js: \>=20.9.0
-   npm: recent version recommended

## Version Information

-   Next.js: 16.x
-   React / React DOM: 19.x
-   ESLint: 9.x
-   Pico CSS: 2.x

## Current Stack

This project currently uses:

-   **Next.js** for routing and static page generation
-   **React** for components and interactive tools
-   **Pico CSS (classless)** for base styling
-   **Custom CSS** in `styles/style.css` for layout and site-specific
    tweaks
-   **Plain JavaScript pages** for a lightweight setup
-   **ESLint** for linting

The styling approach focuses on:

-   lightweight local CSS
-   simple, readable layouts
-   no unnecessary external dependencies
-   privacy-first defaults

## Project Goals

Utility Toolbox aims to provide small, practical browser-based utilities
that are easy to use and easy to trust.

Key goals include:

-   **Privacy-first design**
-   **Local-first processing where possible**
-   **No ads or tracking**
-   **Open source code**
-   **Simple deployment**
-   **Easy future expansion**

The project focuses on a small collection of useful, focused tools
rather than adding unnecessary complexity.

## Quick Start

1.  Clone the repo:

    ``` bash
    git clone https://github.com/jennifert/utility-toolbox.git
    cd utility-toolbox
    ```

2.  Install dependencies:

    ``` bash
    npm install
    ```

3.  Start the development server:

    ``` bash
    npm run dev
    ```

4.  Build the site:

    ``` bash
    npm run build
    ```

5.  Start the production server locally:

    ``` bash
    npm run start
    ```

## Linting

Run ESLint with:

``` bash
npm run lint
```

## Project Structure

Utility Toolbox is organized as a small tools hub using standard Next.js
pages and individual utility pages.

### Main pages

Top-level pages live in `pages/`, for example:

-   `pages/index.js`
-   `pages/about.js`
-   `pages/privacy.js`

### Tool pages

Individual utilities live in `pages/tools/`, including:

-   `pages/tools/image-ratio.js`
-   `pages/tools/mailto-encoder.js`

### Project files

Other important files include:

-   `README.md`
-   `TODO.md`
-   `CHANGELOG.md`
-   `LICENSE`

## Available Tools

### Image ratio calculator

Calculate resized image dimensions while preserving the original aspect
ratio.

Features include:

-   enter original image width and height
-   automatically determine the simplified aspect ratio
-   calculate a matching height when changing the width
-   calculate a matching width when changing the height
-   optionally disable aspect-ratio preservation
-   reset dimensions and start a new calculation
-   calculations performed locally in the browser

### Mailto encoder

Generate encoded `mailto:` links for use in websites and HTML email.

Features include:

-   recipient email address
-   optional CC and BCC addresses
-   subject and message body
-   email address validation
-   automatic URL encoding
-   generated `mailto:` URL
-   copy-to-clipboard support
-   processing performed locally in the browser

## Planned Tools

Possible future tools and enhancements include:

-   local image dimension detection
    -   choose an image from the user's device
    -   read its width and height in-browser
    -   do not upload the image to a server
-   percentage-based image resizing
-   common image aspect-ratio presets
-   date and time calculations
-   timezone conversions
-   Celsius / Fahrenheit conversions

See [TODO.md](./TODO.md) for the current development list.

## Privacy Approach

Privacy is a core part of this project.

Utility Toolbox is intended to:

-   avoid ads
-   avoid tracking
-   avoid unnecessary external assets where practical
-   process local tasks in the browser when possible

The current utility calculations and encoding tasks can be performed
directly in the user's browser without sending their input to a server.

If a future tool allows a user to choose an image in order to read its
width and height, the file should likewise be processed locally in the
browser and not uploaded to a server for routine calculations.

Settings and preferences may later be stored locally in the browser for
convenience.

## Deployment Notes

This site is intended to be deployed as a simple Next.js project, with
static-friendly configuration where practical.

Deployment target:

-   **DigitalOcean**

As the project grows, deployment notes may be expanded to document:

-   static export behavior
-   cache/header considerations
-   domain setup
-   release workflow

## Project Notes

See [TODO.md](./TODO.md) for the current task list and planned features,
and [CHANGELOG.md](./CHANGELOG.md) for project updates.

Bug reports, feature requests, and feedback are intended to go through
GitHub Issues.

## License

**Code** is licensed under the [MIT License](./LICENSE).

## Acknowledgments

-   [Next.js](https://nextjs.org/) for the site framework
-   [React](https://react.dev/) for the UI layer
-   [Pico CSS](https://picocss.com/) for lightweight base styling
-   [Shields.io](https://shields.io/) for README badges
-   [Awesome README](https://github.com/matiassingers/awesome-readme)
    for formatting inspiration
