import { useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'

export const POST_TITLE = 'Simple email encoding tool'
export const POST_DESCRIPTION =
  'Use this tool to generate a mailto link with subject, body, cc, and bcc fields.'

function isValidEmail(email) {
  const value = email.trim()
  const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

  if (value.includes('..')) return false

  return re.test(value)
}

function isValidOrEmptyEmail(label, value) {
  if (!value) return true

  if (isValidEmail(value)) return true

  console.warn(`Invalid ${label} address:`, value)
  return false
}

function encodeForMailto(value) {
  return encodeURIComponent(value)
}

function buildMailtoUrl(opts) {
  const {
    to,
    cc = '',
    bcc = '',
    subject = '',
    body = '',
  } = opts

  if (!isValidEmail(to)) {
    return { error: '❌ Invalid primary email address.' }
  }

  if (!isValidOrEmptyEmail('CC', cc)) {
    return { error: '❌ Invalid CC address.' }
  }

  if (!isValidOrEmptyEmail('BCC', bcc)) {
    return { error: '❌ Invalid BCC address.' }
  }

  let url = 'mailto:' + to.trim()
  const params = []

  if (subject) params.push('subject=' + encodeForMailto(subject))
  if (body) params.push('body=' + encodeForMailto(body))
  if (cc) params.push('cc=' + encodeForMailto(cc))
  if (bcc) params.push('bcc=' + encodeForMailto(bcc))

  if (params.length) {
    url += '?' + params.join('&')
  }

  return { url }
}

export default function MailtoEncoder() {
  const [to, setTo] = useState('')
  const [cc, setCc] = useState('')
  const [bcc, setBcc] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [mailtoLink, setMailtoLink] = useState('')
  const [resultMessage, setResultMessage] = useState('')
  const [resultType, setResultType] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    setResultMessage('')
    setResultType('')

    const mailOptions = {
      to: to.trim(),
      cc: cc.trim(),
      bcc: bcc.trim(),
      subject: subject.trim(),
      body: body.trim(),
    }

    const { url, error } = buildMailtoUrl(mailOptions)

    if (url) {
      setMailtoLink(url)
      setResultMessage('✅ Mailto URL generated successfully!')
      setResultType('success')
      return
    }

    if (error) {
      setMailtoLink('')
      setResultMessage(error)
      setResultType('error')
    }
  }

  async function handleCopy() {
    if (!mailtoLink) return

    try {
      await navigator.clipboard.writeText(mailtoLink)
      setResultMessage('📋 Copied to clipboard!')
      setResultType('info')

      setTimeout(() => {
        setResultMessage('')
        setResultType('')
      }, 5000)
    } catch (error) {
      console.error('Copy failed:', error)
      setResultMessage('❌ Unable to copy to clipboard.')
      setResultType('error')
    }
  }

  return (
    <Layout>
      <Head>
        <title>{POST_TITLE} | Utility Toolbox</title>
        <meta name="description" content={POST_DESCRIPTION} />
      </Head>

      <section>
        <h1>{POST_TITLE}</h1>
        <p>
          Use this tool to generate a <code>mailto:</code> link with all fields.
        </p>

        <div
          id="result"
          aria-live="polite"
          aria-atomic="true"
          className={resultType ? `result-message ${resultType}` : 'result-message'}
        >
          {resultMessage}
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Enter email details</legend>

            <label htmlFor="txtTo">
              To:
              <input
                type="email"
                id="txtTo"
                name="to"
                required
                aria-required="true"
                placeholder="Enter recipient's email"
                value={to}
                onChange={(event) => setTo(event.target.value)}
              />
            </label>

            <label htmlFor="txtCc">
              Cc:
              <input
                type="email"
                id="txtCc"
                name="cc"
                placeholder="Optional"
                value={cc}
                onChange={(event) => setCc(event.target.value)}
              />
            </label>

            <label htmlFor="txtBcc">
              Bcc:
              <input
                type="email"
                id="txtBcc"
                name="bcc"
                placeholder="Optional"
                value={bcc}
                onChange={(event) => setBcc(event.target.value)}
              />
            </label>

            <label htmlFor="txtSubject">
              Subject:
              <input
                type="text"
                id="txtSubject"
                name="subject"
                placeholder="Enter subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </label>

            <label htmlFor="txtBody">
              Body:
              <textarea
                id="txtBody"
                name="body"
                placeholder="Enter your message here"
                required
                aria-required="true"
                value={body}
                onChange={(event) => setBody(event.target.value)}
              />
            </label>

            <button type="submit">Generate mailto link</button>
          </fieldset>
        </form>

        <fieldset>
          <legend>Generated mailto link</legend>

          <label htmlFor="mailtoLink">
            Copy this into your HTML email:
          </label>

          <textarea
            id="mailtoLink"
            readOnly
            rows="4"
            value={mailtoLink}
          />

          <button
            type="button"
            onClick={handleCopy}
            disabled={!mailtoLink}
          >
            Copy to Clipboard
          </button>
        </fieldset>
      </section>
    </Layout>
  )
}