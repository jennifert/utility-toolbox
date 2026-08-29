import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <nav aria-label="Footer links" className="footer-links">
        <ul>
          <li>
            <small>
              <Link href="/privacy/">Privacy</Link>
            </small>
          </li>
          <li>
            <small>
              <a href="/humans.txt" rel="author">
                Humans.txt
              </a>
            </small>
          </li>
        </ul>
      </nav>

      <div className="copyright">
        <p>
          <small>&copy; 2026 Jennifer Tesolin.</small>
        </p>
        <p>
          <small>
            Source code for this site is{' '}
            <a
              href="https://github.com/jennifert/utility-toolbox/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT licensed
            </a>.
          </small>
        </p>
      </div>
    </footer>
  )
}