import React from 'react'
import styles from './BoxProgram.module.css'

type BoxProgramProps = {
  title: string;
  description: string;
  src: string;
  flexDirection: 'row' | 'row-reverse';
}

const BoxProgram = ({
  title,
  description,
  src,
  flexDirection
}: BoxProgramProps ) => {
  return (
    <div className={styles.boxProgram} style={{flexDirection: flexDirection}}>
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

export default BoxProgram