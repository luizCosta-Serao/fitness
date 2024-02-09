import ArrowUp from '../assets/arrow-up.svg'
import styles from './Footer.module.css'

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className={styles.footer}>
      <button onClick={scrollToTop} className={styles.btnFooter}>
        Back to Top 
        <img src={ArrowUp} alt="" />
      </button>
    </footer>
  )
}

export default Footer