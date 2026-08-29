import { useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'

export const POST_TITLE = 'Image ratio calculator'
export const POST_DESCRIPTION =
  'Calculate resized image dimensions while preserving the original aspect ratio.'

function calculateHeight(originalWidth, originalHeight, newWidth) {
  if (!originalWidth || !originalHeight || !newWidth) return ''

  const aspectRatio = originalWidth / originalHeight
  return Math.round(newWidth / aspectRatio)
}

function calculateWidth(originalWidth, originalHeight, newHeight) {
  if (!originalWidth || !originalHeight || !newHeight) return ''

  const aspectRatio = originalWidth / originalHeight
  return Math.round(newHeight * aspectRatio)
}

function formatRatio(width, height) {
  if (!width || !height) return ''

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }

  const divisor = gcd(width, height)

  return `${width / divisor}:${height / divisor}`
}

export default function ImageRatioCalculator() {
  const [originalWidth, setOriginalWidth] = useState('')
  const [originalHeight, setOriginalHeight] = useState('')
  const [newWidth, setNewWidth] = useState('')
  const [newHeight, setNewHeight] = useState('')
  const [preserveRatio, setPreserveRatio] = useState(true)

  const ratio =
    originalWidth && originalHeight
      ? formatRatio(Number(originalWidth), Number(originalHeight))
      : ''

  function handleNewWidthChange(event) {
    const value = event.target.value
    setNewWidth(value)

    if (
      preserveRatio &&
      originalWidth &&
      originalHeight &&
      value
    ) {
      const calculatedHeight = calculateHeight(
        Number(originalWidth),
        Number(originalHeight),
        Number(value)
      )

      setNewHeight(String(calculatedHeight))
    }
  }

  function handleNewHeightChange(event) {
    const value = event.target.value
    setNewHeight(value)

    if (
      preserveRatio &&
      originalWidth &&
      originalHeight &&
      value
    ) {
      const calculatedWidth = calculateWidth(
        Number(originalWidth),
        Number(originalHeight),
        Number(value)
      )

      setNewWidth(String(calculatedWidth))
    }
  }

  function handleReset() {
    setOriginalWidth('')
    setOriginalHeight('')
    setNewWidth('')
    setNewHeight('')
    setPreserveRatio(true)
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
          Enter the original image dimensions, then change either the width or
          height to calculate the matching dimension.
        </p>

        <fieldset>
          <legend>Original image dimensions</legend>

          <label htmlFor="originalWidth">
            Width:
            <input
              type="number"
              id="originalWidth"
              min="1"
              step="1"
              inputMode="numeric"
              placeholder="1920"
              value={originalWidth}
              onChange={(event) => setOriginalWidth(event.target.value)}
            />
          </label>

          <label htmlFor="originalHeight">
            Height:
            <input
              type="number"
              id="originalHeight"
              min="1"
              step="1"
              inputMode="numeric"
              placeholder="1080"
              value={originalHeight}
              onChange={(event) => setOriginalHeight(event.target.value)}
            />
          </label>

          {ratio && (
            <p>
              Aspect ratio: <strong>{ratio}</strong>
            </p>
          )}
        </fieldset>

        <fieldset>
          <legend>New image dimensions</legend>

          <label>
            <input
              type="checkbox"
              checked={preserveRatio}
              onChange={(event) => setPreserveRatio(event.target.checked)}
            />
            Preserve aspect ratio
          </label>

          <label htmlFor="newWidth">
            Width:
            <input
              type="number"
              id="newWidth"
              min="1"
              step="1"
              inputMode="numeric"
              placeholder="1280"
              value={newWidth}
              onChange={handleNewWidthChange}
            />
          </label>

          <label htmlFor="newHeight">
            Height:
            <input
              type="number"
              id="newHeight"
              min="1"
              step="1"
              inputMode="numeric"
              placeholder="720"
              value={newHeight}
              onChange={handleNewHeightChange}
            />
          </label>

          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </fieldset>
      </section>
    </Layout>
  )
}