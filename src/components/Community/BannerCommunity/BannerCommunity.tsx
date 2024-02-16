import Button from '../../Global/Button'
import styles from './BannerCommunity.module.css'

const BannerCommunity = () => {
  return (
    <section className={styles.bannerCommunity}>
      <span className={styles.imgBanner}></span>
      <h1 className={styles.title}>COMMUNITY</h1>
      <p className={styles.description}>Workout is a space for you to connect with others who share the same passion for physical and mental wellness. Here you can exchange experiences, tips, recipes, challenges and motivations to achieve your goals and live a healthier and happier life.</p>
      <Button>Join the community</Button>
    </section>
  )
}

export default BannerCommunity