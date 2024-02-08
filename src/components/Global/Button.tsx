import React from 'react'
import styles from './Button.module.css'

const Button = ({ children }: React.PropsWithChildren) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export default Button