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
          <strong>Last updated:</strong> August 28, 2026
        </p>

        <p>
          Utility Toolbox is designed to respect your privacy. This site provides
          practical browser-based tools without ads, tracking, or unnecessary
          collection of personal information.
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
            Send tool input to a server when the calculation or processing can
            be performed locally in your browser
          </li>
        </ul>
      </section>

      <section>
        <h2>Local processing</h2>

        <p>
          Where possible, Utility Toolbox performs calculations and processing
          directly in your browser.
        </p>

        <h3>Image Ratio Calculator</h3>

        <p>
          The Image Ratio Calculator performs its dimension and aspect ratio
          calculations locally in your browser. The width and height values you
          enter are not sent to Utility Toolbox for processing.
        </p>

        <h3>Mailto Encoder</h3>

        <p>
          The Mailto Encoder generates the <code>mailto:</code> link locally in
          your browser. Email addresses, subject lines, and message contents
          entered into the tool are not sent to Utility Toolbox for processing.
        </p>
      </section>

      <section>
        <h2>Image files</h2>

        <p>
          Utility Toolbox does not currently require you to upload an image to
          use the Image Ratio Calculator.
        </p>

        <p>
          A future version may allow you to select a local image so that its
          dimensions can be detected automatically. If this feature is added,
          it is intended to read the image locally in your browser without
          uploading the image to Utility Toolbox for server-side processing.
        </p>
      </section>

      <section>
        <h2>Local storage and saved preferences</h2>

        <p>
          Utility Toolbox does not currently require an account or server-side
          profile to save preferences.
        </p>

        <p>
          Future versions may store limited settings or preferences using
          browser-based storage such as <code>localStorage</code>. These may
          include preferences such as theme, locale, units, formatting, or
          tool-specific options.
        </p>

        <p>
          Browser-based preferences are intended to remain on your device and
          are not intended for advertising or cross-site tracking.
        </p>

        <p>
          If settings import or export is added in the future, an exported
          settings file will only be created when you choose to export it.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>

        <p>
          Utility Toolbox does not use cookies for advertising or cross-site
          tracking.
        </p>

        <p>
          If cookies or other browser storage are introduced for essential site
          functionality or preferences, this policy will be updated to describe
          their use.
        </p>
      </section>

      <section>
        <h2>Contact and support</h2>
        <p>
          Public bug reporting and feature request options will be available when
          Utility Toolbox reaches its first public release.
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
          Site assets such as CSS and JavaScript are intended to be served by
          the site itself whenever practical.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>

        <p>
          Utility Toolbox is designed to minimize the collection of personal
          information. Data entered into tools that operate locally in your
          browser is not retained by Utility Toolbox as part of those
          calculations.
        </p>

        <p>
          If browser-based preferences are introduced in the future, those
          preferences will remain in your browser until they are cleared or
          reset.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>

        <p>
          This privacy policy may be updated as Utility Toolbox changes or new
          tools and features are introduced. When material changes are made, the
          &ldquo;Last updated&rdquo; date at the top of this page will be
          revised.
        </p>
      </section>
    </Layout>
  )
}