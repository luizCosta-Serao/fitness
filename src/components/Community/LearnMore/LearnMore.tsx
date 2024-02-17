import Button from '../../Global/Button'
import styles from './LearnMore.module.css'

const LearnMore = () => {
  return (
    <section className={styles.learnMore}>
      <span className={styles.imgLearnMore}></span>
      <p className={styles.description}>In the fitness community, you can also find qualified professionals who can guide and support you on your journey, such as personal trainers, nutritionists, psychologists, physiotherapists, and doctors. They are ready to answer your questions, offer consultations, devise personalized plans, and track your results.</p>
      <Button>Learn more about us</Button>
    </section>
  )
}

export default LearnMore