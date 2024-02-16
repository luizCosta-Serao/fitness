import styles from './BoxProgramHealthy.module.css'

type BoxProgramHealthyProps = {
  title: string;
  description: string;
  src: string;
  flexDirection: 'row' | 'row-reverse';
}

const BoxProgramHealthy = ({
  title,
  description,
  src,
  flexDirection
}: BoxProgramHealthyProps ) => {
  return (
    <div className={styles.boxProgramHealthy} style={{flexDirection: flexDirection}}>
      <div className={styles.boxContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.boxImg}>
        <img src={src} alt="" />
      </div>
    </div>
  )
}

export default BoxProgramHealthy