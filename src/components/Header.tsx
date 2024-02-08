import React from 'react'
import styles from './Header.module.css'
import Logo from '../assets/logo.svg'
import MenuMobile from '../assets/menu_mobile.svg'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState(false)
  const { pathname } = useLocation()

  React.useEffect(() => {
    setMenuMobile(false)
  }, [pathname])

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to='/'><img src={Logo} alt="Logo" /></Link>
      </div>
      <nav>
        <button onClick={() => setMenuMobile(!menuMobile)} className={styles.btnMobile}>
          <img src={MenuMobile} alt="Menu" />
        </button>
        <ul className={`${styles.menu} ${menuMobile ? styles.active : ''}`}>
          <li><Link className={pathname === '/' ? styles.active : ''} to='/'>WORKOUTS</Link></li>
          <li><Link className={pathname === '/programs' ? styles.active : ''} to='/programs'>PROGRAMS</Link></li>
          <li><Link className={pathname === '/healthy' ? styles.active : ''} to='/healthy'>HEALTHY LIVING</Link></li>
          <li><Link className={pathname === '/community' ? styles.active : ''} to='/community'>COMMUNITY</Link></li>
          <li><Link className={pathname === '/about' ? styles.active : ''} to='/about'>ABOUT</Link></li>
          <li><Link className={pathname === '/store' ? styles.active : ''} to='/store'>STORE</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header