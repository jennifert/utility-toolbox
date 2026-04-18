import Head from 'next/head'
import Layout from '../components/layout'

export const POST_TITLE = 'About'
export const POST_DESCRIPTION =
    'Utility Toolbox is a simple collection of practical browser-based tools built with privacy in mind.'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} | Utility Toolbox</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>

            <main id="main-content">
                <section>
                    <h1>{POST_TITLE}</h1>
                    <p>
                        The goal is straightforward: make small, useful tools that are easy to use,
                        easy to understand, and respectful of the people using them. No ads, no
                        tracking, no unnecessary complexity.
                    </p>

                    <p>
                        Many websites offering simple calculators or converters rely on analytics,
                        external assets, account systems, or server-side processing that users do
                        not really need. Utility Toolbox takes a different approach. Where possible,
                        tools run locally in your browser and keep processing on your device.
                    </p>

                    <p>
                        This project is designed to be lightweight, transparent, and easy to
                        customize. The code is open source, the site avoids unnecessary
                        dependencies, and the overall focus is on practical tools for everyday
                        tasks.
                    </p>
                </section>

                <section>
                    <h2>Principles</h2>
                    <ul>
                        <li>Privacy first</li>
                        <li>No ads</li>
                        <li>No tracking</li>
                        <li>Local-first processing where possible</li>
                        <li>No unnecessary external dependencies</li>
                        <li>Open source and easy to customize</li>
                    </ul>
                </section>

                <section>
                    <h2>Current and planned tools</h2>
                    <p>
                        Utility Toolbox starts with a small set of practical utilities and may
                        expand over time. Examples include:
                    </p>
                    <ul>
                        <li>Image aspect ratio calculations</li>
                        <li>Mailto link encoding</li>
                        <li>Date and time utilities</li>
                        <li>Timezone conversions</li>
                        <li>Temperature conversions</li>
                    </ul>

                    <p>
                        The aim is to keep each tool focused, useful, and easy to understand.
                    </p>
                </section>

                <section>
                    <h2>Open source</h2>
                    <p>
                        Utility Toolbox is an open-source personal project. Source code, releases,
                        bug reports, and feature requests are managed through GitHub.
                    </p>

                    <p>
                        If you run into a problem or want to suggest an improvement, please open an
                        issue on GitHub.
                    </p>
                </section>

                <section>
                    <h2>A note on simplicity</h2>
                    <p>
                        This project is intentionally simple. It does not try to be a large
                        platform or service. It is meant to be a small toolbox of trustworthy
                        utilities that work well and respect user privacy.
                    </p>
                </section>
            </main>
        </Layout>
    )
}