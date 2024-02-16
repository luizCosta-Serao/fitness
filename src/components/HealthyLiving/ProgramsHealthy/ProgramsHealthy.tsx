import BoxProgramHealthy from './BoxProgramHealthy'
import styles from './ProgramsHealthy.module.css'
import ImgProgramsHealthyOne from '../../../assets/photo_programs_healthy_1.png'
import ImgProgramsHealthyTwo from '../../../assets/photo_programs_healthy_2.png'

const ProgramsHealthy = () => {
  return (
    <section className={styles.programsHealthy}>
      <h2 className={styles.title}>Types of Workouts</h2>
      <BoxProgramHealthy
        title='1. Zumba'
        description="Zumba is a form of physical exercise that combines dance and fitness, using Latin rhythms and other musical styles. It's a fun and effective way to burn calories, improve coordination, and strengthen muscles"
        src={ImgProgramsHealthyOne}
        flexDirection='row'
      />
      <BoxProgramHealthy
        title='2. Yoga'
        description='Yoga is a practice that aims to work the body and mind in an interconnected way, with exercises that help control stress, anxiety, body and spine pain, in addition to improving balance and promoting a sense of well-being and disposition'
        src={ImgProgramsHealthyTwo}
        flexDirection='row-reverse'
      />
    </section>
  )
}

export default ProgramsHealthy