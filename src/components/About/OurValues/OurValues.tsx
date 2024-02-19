import styles from './OurValues.module.css'

const OurValues = () => {
  return (
    <section className={styles.ourValues}>
      <h2 className={styles.title}>Our Values</h2>
      <ul className={styles.listValues}>
        <li className={styles.value}>
          <h3>Determination</h3>
          <p>Every drop of sweat is a step toward your goals. No matter how hard it is, you are determined to win.</p>
        </li>
        <li className={styles.value}>
          <h3>Community</h3>
          <p>We are a family. Our welcoming and motivating environment is the fuel for your success. Together, we celebrate victories and support each other through challenges.</p>
        </li>
        <li className={styles.value}>
          <h3>Balance</h3>
          <p>We believe that health goes beyond muscles. Nutrition, rest, and a healthy mind are essential parts of your journey.</p>
        </li>
      </ul>
    </section>
  )
}

export default OurValues