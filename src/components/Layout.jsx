import { Outlet } from 'react-router'

import Header from './Header.jsx'

function Layout() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} aria-label="Contenido principal de la página">
        <Outlet />
      </main>
    </>
  )
}

export default Layout