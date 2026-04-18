import Head from 'next/head'
import Layout from '../components/layout'

export const POST_TITLE = 'Utility Toolbox'
export const POST_DESCRIPTION = 'Simple tools for everyday tasks. No tracking, no ads.'

function HomePage() {
  return (
    <Layout home>
      <Head>
        <title>{POST_TITLE}</title>
        <meta name="description" content={POST_DESCRIPTION} />
      </Head>

      <section>
        <h1>Welcome!</h1>
        <p>Content will be here.</p>
      </section>
    </Layout>
  )
}

export default HomePage