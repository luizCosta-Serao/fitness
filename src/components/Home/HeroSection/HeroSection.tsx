import Button from '../../Global/Button'
import Nike from '../../../assets/nike.png'
import BuzzFeed from '../../../assets/buzz_feed.png'
import Esprit from '../../../assets/esprit.png'
import NatGeograph from '../../../assets/nat_geographic.png'
import Dw from '../../../assets/dw.png'
import HuffPost from '../../../assets/huff_post.png'
import styles from './HeroSection.module.css'
import HeroKm from '../../../assets/hero_km.png'
import HeroVideos from '../../../assets/hero_videos.png'
import HeroTutorial from '../../../assets/hero_tutorial.png'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>WORKOUT WITH ME</h1>
        <p>A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!</p>
        <Button>Join Club Now!</Button>
      </div>
      <div className={styles.featured}>
        <span>AS FEATURED IN</span>
        <ul className={styles.featuredImg}>
          <li><img src={Nike} alt="Nike" /></li>
          <li><img src={BuzzFeed} alt="BuzzFeed" /></li>
          <li><img src={Esprit} alt="ESPRIT" /></li>
          <li><img src={NatGeograph} alt="National Geographic" /></li>
          <li><img src={Dw} alt="DW" /></li>
          <li><img src={HuffPost} alt="HuffPost" /></li>
        </ul>
      </div>
      <div className={styles.ilustrativeImgs}>
        <span className={styles.km}><img src={HeroKm} alt="" /></span>
        <span className={styles.videos}><img src={HeroVideos} alt="" /></span>
        <span className={styles.tutorial}><img src={HeroTutorial} alt="" /></span>
      </div>
    </section>
  )
}

export default HeroSection