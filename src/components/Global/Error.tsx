import React from 'react'
import styles from './Error.module.css'

const Error = ({ children }: React.PropsWithChildren ) => {
  return (
    <p className={styles.error}>{children}</p>
  )
}

export default Error