import Button from '../../Global/Button'
import styles from './BannerHealthy.module.css'


const BannerHealthy = () => {
  return (
    <section>
      <div className={styles.imgHealthy}></div>
      <div className={styles.content}>
        <h1>WORKOUT HEALTHY LIVING</h1>
        <p>We also offer training programs to maintain a healthy life with a more relaxed and relaxed workout</p>
        <Button>View Programs</Button>
      </div>
    </section>
  )
}

export default BannerHealthy