import React from 'react'
import styles from '../styles/PersonalInfo.module.css'

const PersonalInfoItem = ({k, val}) => {
  return (
    <div className={styles.personalInfoItem}>
      <div className={styles.key}>
        <p>{`${k}:`}</p>
      </div>
      <div className={styles.value}>
        <p>{val}</p>
      </div>
    </div>
  )
}

export default PersonalInfoItem