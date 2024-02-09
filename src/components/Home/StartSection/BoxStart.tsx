import Arrow from '../../../assets/arrow.svg'
import styles from './BoxStart.module.css'

type BoxStartProps = {
  title: string;
  description: string;
}

const BoxStart = ({
  title,
  description
}: BoxStartProps ) => {
  return (
    <li className={styles.boxStart}>
      <h5>{title}</h5>
      <p>{description} <img src={Arrow} alt="" /></p>
    </li>
  )
}

export default BoxStart