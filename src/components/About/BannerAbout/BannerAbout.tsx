import Button from '../../Global/Button'
import styles from './BannerAbout.module.css'

const BannerAbout = () => {
  return (
    <section>
      <div className={styles.imgAbout}></div>
      <div className={styles.content}>
        <h1>ABOUT</h1>
        <p>At Academia Workout, we believe that every day is an opportunity to surpass yourself. Our workouts are more than physical exercises; They are a journey of self-discovery, strength, and resilience. Here, you are not just a student, but a warrior in search of your best self.</p>
        <Button>View testimonials</Button>
      </div>
    </section>
  )
}

export default BannerAbout