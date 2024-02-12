import Button from '../../Global/Button'
import styles from './BannerPrograms.module.css'

const BannerPrograms = () => {
  return (
    <section>
      <div className={styles.imgPrograms}></div>
      <div className={styles.content}>
        <h1>WORKOUT PROGRAMS</h1>
        <p>Get a workout program that's tailored to your routine and goals</p>
        <Button>View Programs</Button>
      </div>
    </section>
  )
}

export default BannerPrograms