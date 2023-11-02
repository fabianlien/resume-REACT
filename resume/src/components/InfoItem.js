import React from 'react'
import styles from '../styles/InfoItem.module.css'

const InfoItem = ({k, val, extraClass}) => {
  return (
    <div className={styles.personalInfoItem}>
      <div className={extraClass? (`${styles[extraClass]} ${styles.key}`):styles.key}>
        <span>{`${k}:`}</span>
      </div>
      <div className={extraClass? (`${styles[extraClass]} ${styles.value}`):styles.value}>
        <span>{val}</span>
      </div>
    </div>
  )
}

export default InfoItem