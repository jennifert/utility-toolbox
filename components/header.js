import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header className="site-header">
      <span className="site-name">
        <Link
          href="/"
          className={router.pathname === '/' ? 'current-page' : undefined}
          aria-current={router.pathname === '/' ? 'page' : undefined}
        >
          <strong>Utility Toolbox</strong>
        </Link>
      </span>

      <nav aria-label="Site menu">
        <ul className="site-nav">
          <li>
            <Link
              href="/about"
              className={router.pathname === '/about' ? 'current-page' : undefined}
              aria-current={router.pathname === '/about' ? 'page' : undefined}
            >
              About
            </Link>
          </li>

          <li className="tools-menu">
            <details>
              <summary>Tools</summary>
              <ul className="tools-dropdown">
                <li>
                  <Link href="/tools/image-ratio">Image ratio</Link>
                </li>
                <li>
                  <Link href="/tools/mailto-encoder">Mailto encoder</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </header>
  )
}