import styles from './BoxMoreInfo.module.css'
import Button from '../../Global/Button';

type BoxMoreInfoProps = {
  title: string;
  description: string;
  src: string;
  flexDirection: 'row' | 'row-reverse';
}

const BoxMoreInfo = ({
  title,
  description,
  src,
  flexDirection
}: BoxMoreInfoProps ) => {
  return (
    <div className={styles.boxMoreInfo} style={{flexDirection: flexDirection}}>
      <div className={styles.boxContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button>See More</Button>
      </div>
      <div className={styles.boxImg}>
        <img src={src} alt="" />
      </div>
    </div>
  )
}

export default BoxMoreInfo