import Head from 'next/head'
import Layout from '../components/layout'

export const POST_TITLE = 'Privacy Policy'
export const POST_DESCRIPTION =
  'Privacy Policy for Utility Toolbox, a privacy-first collection of practical browser-based tools with no ads, no tracking, and local-first processing where possible.'

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>{POST_TITLE} | Utility Toolbox</title>
        <meta name="description" content={POST_DESCRIPTION} />
      </Head>

      <section>
        <h1>{POST_TITLE}</h1>
        <p>
          <strong>Last updated:</strong> April 14, 2026
        </p>

        <p>
          Utility Toolbox is designed to respect your privacy. This site aims to
          provide practical browser-based tools without ads, tracking, or
          unnecessary collection of personal information.
        </p>
      </section>

      <section>
        <h2>What Utility Toolbox does not do</h2>
        <p>Utility Toolbox does not:</p>
        <ul>
          <li>Require user accounts</li>
          <li>Show ads</li>
          <li>Use tracking pixels</li>
          <li>Use analytics for visitor profiling</li>
          <li>Sell personal information</li>
          <li>
            Upload your files for server-side processing when a tool is designed
            to work locally in your browser
          </li>
        </ul>
      </section>

      <section>
        <h2>Local processing</h2>
        <p>
          Where possible, tools on this site work locally in your browser.
        </p>

        <p>
          For example, if a tool allows you to select or upload an image file in
          order to read its dimensions, that file is processed locally on your
          device for that purpose only. It is not uploaded to the site&apos;s
          server merely to calculate width, height, or aspect ratio.
        </p>

        <p>
          If a tool is described as local-only, its processing is intended to
          remain in your browser and on your device.
        </p>
      </section>

      <section>
        <h2>Local storage and saved preferences</h2>
        <p>
          Utility Toolbox may store limited preferences in your browser using
          local storage or similar browser-based storage.
        </p>

        <p>This may include settings such as:</p>
        <ul>
          <li>Theme preference</li>
          <li>Locale preference</li>
          <li>Preferred units or formatting options</li>
          <li>Tool-specific preferences</li>
        </ul>

        <p>
          These settings are stored on your device, in your browser, to help the
          site remember your choices. They are not used for advertising or
          tracking.
        </p>

        <p>
          If import/export of settings is provided, any exported settings file is
          created only when you choose to export it.
        </p>
      </section>

      <section>
        <h2>GitHub links and issue reporting</h2>
        <p>
          Utility Toolbox may link to GitHub for source code, releases, bug
          reports, and feature requests.
        </p>

        <p>
          If you choose to visit GitHub or open an issue there, your interaction
          with GitHub is subject to GitHub&apos;s own terms and privacy
          practices, not this site&apos;s privacy policy.
        </p>

        <p>
          Utility Toolbox does not provide a direct contact form at this time.
          Project feedback and support requests are handled through GitHub
          Issues.
        </p>
      </section>

      <section>
        <h2>External resources</h2>
        <p>
          Utility Toolbox aims to avoid unnecessary external resources such as
          external fonts, third-party CDNs, and similar dependencies where
          practical.
        </p>

        <p>
          Site assets such as CSS and JavaScript are intended to be served
          locally by the site itself whenever possible.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>Utility Toolbox is intended to avoid non-essential cookies.</p>

        <p>
          If browser storage is used for settings or preferences, that storage
          is used for site functionality rather than advertising or cross-site
          tracking.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          Because Utility Toolbox is designed to minimize collection of personal
          data, there is generally little or no personal data retained by the
          site itself for normal use of local browser tools.
        </p>

        <p>
          Preferences stored in your browser remain there until you clear them,
          reset them, or remove them through your browser settings.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          This privacy policy may be updated over time to reflect changes to the
          site or its tools. When changes are made, the &ldquo;Last updated&rdquo;
          date at the top of this page will be revised.
        </p>
      </section>

      <section>
        <h2>Contact and support</h2>
        <p>
          For bug reports, feature requests, or project feedback, please use the
          project&apos;s GitHub Issues page.
        </p>
      </section>
    </Layout>
  )
}