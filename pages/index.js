import Head from 'next/head'
import Layout from '../components/layout'

export const POST_TITLE = 'Utility Toolbox'
export const POST_DESCRIPTION =
  'Simple tools for everyday tasks. No tracking, no ads.'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>{POST_TITLE}</title>
        <meta name="description" content={POST_DESCRIPTION} />
      </Head>

      <section>
        <h1>Small tools you can trust.</h1>
        <p>
          Utility Toolbox is a growing collection of practical browser-based
          tools designed with privacy in mind. No ads, no tracking, and no
          unnecessary complexity.
        </p>
      </section>
    </Layout>
  )
}

export default HomePage