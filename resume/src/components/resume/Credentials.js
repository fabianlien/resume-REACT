import React from 'react'
import styles from '../../styles/Resume.module.css'

const Credentials = () => {
    return (
        <div className={`${styles.credentials} col`}>
            <h3 className={styles.sectionHeading}>Credentials</h3>
            <iframe id={styles.diplomaiframe}
                src="https://www.credential.net/9750631f-553b-4fb3-8899-ef516798ae4f#gs.t74aqyhttps://api.accredible.com/v1/auth/invite?code=c4f220c135f8519bcf42&credential_id=9750631f-553b-4fb3-8899-ef516798ae4f&url=https%3A%2F%2Fwww.credential.net%2F9750631f-553b-4fb3-8899-ef516798ae4f&ident=44cc9718ba6a7d1751f12375dc9eee2e5659ef97"
                title="Digital Credentials"></iframe>
        </div>
    )
}

export default Credentials