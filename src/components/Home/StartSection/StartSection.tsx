import styles from './StartSection.module.css'
import BoxStart from './BoxStart'

const StartSection = () => {

  return (
    <section className={styles.start}>
      <h2 className={styles.title}>Not sure where to start?</h2>
      <p className={styles.description}>Programs offer day-to-day guidance on an interactive calendar to keep you on track.</p>
      <ul className={styles.listStart}>
        <BoxStart title='Workout Videos' description='Access to hundreds of free, full-length workout videos.' />
        <BoxStart title='Workout Programs' description='Affordable and effective workout programs. ' />
        <BoxStart title='Meal Plans' description='Plans built with registered dietitians and nutritionists. ' />
        <BoxStart title='WO Plus ALL ACCESS' description='Add powerful features to your membership. ' />
      </ul>
    </section>
  )
}

export default StartSection