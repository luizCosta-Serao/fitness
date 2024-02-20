import Button from '../../Global/Button'
import styles from './BannerStore.module.css'

const BannerStore = () => {
  return (
    <section className={styles.bannerStore}>
      <div className={styles.imgStore}></div>
      <div className={styles.content}>
        <h1>STORE</h1>
        <p>Check out the products we offer to boost your workout</p>
        <Button>View products</Button>
      </div>
    </section>
  )
}

export default BannerStore