import React from 'react';
import styles from '../../styles/About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faThumbsUp, faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const aboutSection = {
        what: <div className="col-10 p-0 p-lg-2">
            <h4>What do I do?</h4>
            <p>I implement diverse knowledge of different technologies to various projects
                within
                web and software development to create customised practical UX-oriented
                solutions.</p>
        </div>, how: <div className="col-10 p-0 p-lg-2">
            <h4>How do I do it?</h4>
            <p>I follow form as well as function, combining aesthetics with effective and
                conventional design,
                whilst prioritizing application speed, security and reliability to create great
                user experiences.</p>
        </div>, why: <div className="col-10 p-0 p-lg-2">
            <h4>Why hire me?</h4>
            <p>I am a dedicated worker and a creative problem solver who thrives in both
                enthusiastic teams, as well as when working solo.
                I adapt to new tech with ease, and always strive to increase my proficiency
                within my current stack.</p>
        </div>
    }

    return (
        <div className={`${styles.mainContentBox} ${styles.home} ${styles.sectionColumn} col-md-8`}>
            <div className="row">
                <div className="col">
                    <h3 id={styles.aboutMe}>About me</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1 offset-md-0 col-md-6">
                    <div className="row">
                        <div className="col-2 p-lg-2">
                            <FontAwesomeIcon icon={faQuestion} area-hidden="true" />
                        </div>
                        {aboutSection.what}
                    </div>
                </div>
                <div className="col-10 offset-1 offset-md-0 col-md-6">
                    <div className="row">
                        <div className="col-2 p-lg-2">
                            <FontAwesomeIcon icon={faThumbsUp} area-hidden="true" />
                        </div>
                        {aboutSection.how}
                    </div>
                </div>
                <div className="col-10 offset-1 offset-md-0 col-md-12">
                    <div className="row">
                        <div className="col-2 col-md-1 p-lg-2">
                            <FontAwesomeIcon icon={faPersonWalkingLuggage} area-hidden="true" />
                        </div>
                        {aboutSection.why}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About