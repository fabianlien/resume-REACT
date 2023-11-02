import React from 'react';
import styles from '../../styles/InfoItem.module.css';
import InfoItem from '../InfoItem';

const InfoContact = () => {
    return (
        <div className={`${styles.sectionColumn} ${styles.personalInfo} col-md-4 p-5 p-md-2`}>
            <div className="row">
                <div className="col-12">
                    <h3 id={styles.personalInfoHeading}>Contact info</h3>
                </div>
                <InfoItem extraClass="contactInfo" k="phone" val="+46 73 094 23 23"/>
                <InfoItem extraClass="contactInfo" k="email" val="fabian.lien@gmail.com"/>
                <InfoItem extraClass="contactInfo" k="linked in" val={<a href="https://www.linkedin.com/in/fabian-lien/" target="_blank"
                            rel="noreferrer">linkedin.com/in/fabian-lien</a>}/>
                <InfoItem extraClass="contactInfo" k="Address" val={<>Spångavägen 46<br /> 168 75 Stockholm SWEDEN</>}/>
            </div>
        </div>
    )
}

export default InfoContact