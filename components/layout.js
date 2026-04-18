import Footer from '../components/footer'
import Header from '../components/header'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </>
  )
}