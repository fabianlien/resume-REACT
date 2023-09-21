import React from 'react'
import styles from '../styles/PersonalInfo.module.css'
import PersonalInfoItem from './PersonalInfoItem'
import useWindowDimensions from '../hooks/useWindowDimensions'

const PersonalInfo = () => {
    const { width } = useWindowDimensions();

    const skillsList = <ul>
        <li>
            Agile Methodology
        </li>
        <li>
            UX Design
        </li>
        <li>
            Communication
        </li>
        <li>
            Critical Thinking
        </li>
        <li>
            3D Modelling
        </li>
    </ul>

    return (
        <div className={`${styles.personalInfo} ${styles.sectionColumn} col-md-4 p-5 p-md-2`}>
            <div className="row">
                <div className="col-12">
                    <h3 id={styles.personalInfoHeading}>Personal info</h3>
                </div>
                <PersonalInfoItem k="Name" val="Fabian Lien" />
                <PersonalInfoItem k="Date of birth" val="1994 - 06 - 13" />
                <PersonalInfoItem k={(width < 960) & (width > 767) ? ("Nation- ality"): ("Nationality") } val="Swedish" />
                <PersonalInfoItem k="Skills" val={skillsList} />
            </div>
        </div>
    )
}

export default PersonalInfo