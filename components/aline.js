import React from 'react'
import styles from './aline.module.sass'

export default function Aline() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.line}`} style={{ backgroundColor: '#EBEBEB' }} ></div>
    </div>
  )
}
