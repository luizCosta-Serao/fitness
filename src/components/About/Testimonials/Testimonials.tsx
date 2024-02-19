import styles from './Testimonials.module.css'
import TestimonialOne from '../../../assets/testimonial_1.png'
import TestimonialTwo from '../../../assets/testimonial_2.png'

const Testimonials = () => {

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Testimonials</h2>
      <ul className={styles.listTestimonials}>
        <li className={styles.testimonial}>
          <img src={TestimonialOne} alt="" />
          <span>Luciana, 32 years old</span>
          <p>"At Workout, I found not just a place to train, but a second home. Here, I'm stronger, more confident and happier."</p>
        </li>
        <li className={styles.testimonial}>
          <img src={TestimonialTwo} alt="" />
          <span>Pedro, 28 years old</span>
          <p>"The academy taught me that true transformation begins within me. Today, I am grateful for every squat and every push-up."</p>
        </li>
      </ul>
    </section>
  )
}

export default Testimonials