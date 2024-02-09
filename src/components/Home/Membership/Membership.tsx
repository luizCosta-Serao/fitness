import Button from '../../Global/Button'
import styles from './Membership.module.css'

const Membership = () => {
  return (
    <section className={styles.membership}>
      <h2 className={styles.title}>Membership</h2>
      <div className={styles.listMembership}>
        <div className={styles.itemMembership}>
          <h2>Join for free</h2>
          <p>Reach your fitness goals or maintain your healthy lifestyle with professional training and support from a positive and active online community.</p>
          <ul>
            <li>~600 Full-Length Workout Videos</li>
            <li>Customizable Calendar</li>
            <li>Healthy Recipes</li>
            <li>Health and Fitness Articles</li>
            <li>Positive and Supportive Online Community</li>
            <li>No Credit Card Needed</li>
          </ul>
          <Button>See More</Button>
        </div>

        <div className={styles.itemMembership}>
          <h2>WO Plus</h2>
          <p>WO Plus includes everything you get with a free membership and adds brand new convenience features, fitness tools, and unique content.</p>
          <ul>
            <li>Ads-Free Website and Videos</li>
            <li>Surprise Me Workout Selection Tool</li>
            <li>Statistics for Your Activities</li>
            <li>Enter and Track Custom Workouts</li>
            <li>FB Plus Exclusive Workouts</li>
            <li>Trackers to See Your Progress</li>
            <li>FB Plus Content and Challenges</li>
            <li>Video Tags</li>
            <li>FB Plus Routines</li>
            <li>Rest Day Complete</li>
          </ul>
          <Button>Join Club Now!</Button>
        </div>
      </div>
    </section>
  )
}

export default Membership