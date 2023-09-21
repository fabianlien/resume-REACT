import React from 'react'
import styles from '../../styles/Resume.module.css'

const Languages = () => {
    return (
        <div className="row">
            <div className="col-1">
            </div>
            <div className="col-10">
                <br className="d-none d-lg-block"></br>
                <h4>Languages</h4>
                <div className="row">
                    <div className={`${styles.languageBox} ${styles.spokenLanguage} col`}>
                        English
                    </div>
                    <div className={`${styles.languageBox} ${styles.spokenLanguage} col`}>
                        Swedish
                    </div>
                    <div className={`${styles.languageBox} ${styles.frontendLanguage} col`}>
                        HTML
                    </div>
                    <div className={`${styles.languageBox} ${styles.frontendLanguage} col`}>
                        CSS
                    </div>
                    <div className={`${styles.languageBox} ${styles.frontendLanguage} col`}>
                        JavaScript
                    </div>
                    <div className={`${styles.languageBox} ${styles.frontendLanguage} col`}>
                        TypeScript
                    </div>
                    <div className={`${styles.languageBox} ${styles.backendLanguage} col`}>
                        Python
                    </div>
                    <div className={`${styles.languageBox} ${styles.backendLanguage} col`}>
                        Java
                    </div>
                    <div className={`${styles.languageBox} ${styles.backendLanguage} col`}>
                        SQL
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages