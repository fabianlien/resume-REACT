import React from 'react'
import styles from '../../styles/PersonalInfo.module.css'

const PersonalInfoItem = ({k, val}) => {
  return (
    <div className={styles.personalInfoItem}>
      <div className={styles.key}>
        <span>{`${k}:`}</span>
      </div>
      <div className={styles.value}>
        <span>{val}</span>
      </div>
    </div>
  )
}

export default PersonalInfoItem