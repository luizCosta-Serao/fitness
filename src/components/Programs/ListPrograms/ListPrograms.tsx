import styles from './ListPrograms.module.css'
import PhotoProgramsOne from '../../../assets/photo_programs_1.png'
import PhotoProgramsTwo from '../../../assets/photo_programs_2.png'
import PhotoProgramsThree from '../../../assets/photo_programs_3.png'
import BoxProgram from './BoxProgram'

const ListPrograms = () => {
  return (
    <section className={styles.listPrograms}>
      <h2 className={styles.title}>Types of Workoutsh</h2>
      <BoxProgram
        title='1. Hypertrophy'
        description='Muscle hypertrophy is the increase in the size and volume of muscles, which happens due to the practice of intense and regular physical activity and adequate nutrition, which should be rich in proteins and carbohydrates.'
        src={PhotoProgramsOne}
        flexDirection='row'
      />
      <BoxProgram
        title='2. Muscle Strength'
        description='Strength training is a workout that promotes muscle mass gain, improves posture, promotes weight loss and reduces the risk of injury'
        src={PhotoProgramsTwo}
        flexDirection='row-reverse'
      />
      <BoxProgram
        title='3. Metabolic Training'
        description='Metabolic training is a set of exercises performed with moderate to high intensity, with the aim of increasing fat burning to lose weight and define muscles, or even for muscle hypertrophy.'
        src={PhotoProgramsThree}
        flexDirection='row'
      />
    </section>
  )
}

export default ListPrograms