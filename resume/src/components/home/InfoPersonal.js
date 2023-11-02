import React from 'react'
import styles from '../../styles/InfoItem.module.css'
import InfoItem from '../InfoItem'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const InfoPersonal = () => {
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
                <InfoItem k="Name" val="Fabian Lien" />
                <InfoItem k="Date of birth" val="1994 - 06 - 13" />
                <InfoItem k={(width < 960) & (width > 767) ? ("Nation- ality"): ("Nationality") } val="Swedish" />
                <InfoItem k="Skills" val={skillsList} />
            </div>
        </div>
    )
}

export default InfoPersonal