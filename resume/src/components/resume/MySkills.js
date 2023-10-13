import React from 'react'
import styles from '../../styles/Resume.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faTv } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons';
import Languages from './Languages';

const MySkills = () => {

    return (
        <>
            <div className="row">
                <div className="col">
                    <h3 className={styles.sectionHeading}>My skills</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1 offset-sm-0 offset-lg-1 col-sm-6 col-lg-5">
                    <div className="row">
                        <div className="d-none d-sm-block col-sm-2 col-lg-1">
                            <FontAwesomeIcon icon={faTv} area-hidden="true" />
                        </div>
                        <div className="col-sm-10">
                            <h4>Front End</h4>
                            <p>
                                I am a versatile coder who takes a UX-approach to create intuitive frontend
                                solutions. I am proficient with vanilla HTML/CSS/JS, but also an avid user of
                                frontend libraries like React.
                            </p>
                            <div className={`${styles.iconBox} row`}>
                                <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"
                                    id={styles.bootstrapLink} className="col pr-0">
                                    <FontAwesomeIcon icon={faBootstrap}
                                        aria-label="Link to bootstrap webpage" />
                                </a>
                                <a href="https://react.dev/" target="_blank" rel="noreferrer" id={styles.reactLink}
                                    className="col pr-0">
                                    <FontAwesomeIcon icon={faReact} aria-label="Link to React webpage" />
                                </a>
                                <a href="https://jquery.com/" target="_blank" rel="noreferrer"
                                    className="col pr-0">
                                    <div id={styles.jqueryLogo} aria-label="Link to Jquery webpage"></div>
                                </a>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <div className="col-10 offset-1 offset-sm-0 col-sm-6">
                    <div className="row">
                        <div className="d-none d-sm-block col-sm-2 col-lg-1">
                            <FontAwesomeIcon icon={faGears} area-hidden="true" />
                        </div>
                        <div className="col-sm-10">
                            <h4>Back End</h4>
                            <p>
                                I specialize in data-driven web applications. Many of my projects utilise
                                document-based data. I use Django in conjunction with PostgreSQL to process and
                                present information.
                            </p>
                            <div className={`${styles.iconBox} row`}>
                                <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer" className="col pr-0">
                                    <svg id={styles.djangoLogo} width="36" height="36" viewBox="0 0 256 326"
                                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                                        <path
                                            d="M114.784 0h53.278v244.191c-27.29 5.162-47.38 7.193-69.117 7.193C33.873 251.316 0 222.245 0 166.412c0-53.795 35.93-88.708 91.608-88.708 8.64 0 15.222.68 23.176 2.717V0zm1.867 124.427c-6.24-2.038-11.382-2.717-17.965-2.717-26.947 0-42.512 16.437-42.512 45.243 0 28.046 14.88 43.532 42.17 43.532 5.896 0 10.696-.332 18.307-1.351v-84.707z" />
                                        <path
                                            d="M255.187 84.26v122.263c0 42.105-3.154 62.353-12.411 79.81-8.64 16.783-20.022 27.366-43.541 39.055l-49.438-23.297c23.519-10.93 34.901-20.588 42.17-35.327 7.61-15.072 10.01-32.529 10.01-78.445V84.261h53.21zM196.608 0h53.278v54.135h-53.278V0z" />
                                    </svg>
                                </a>
                                <a href="https://www.django-rest-framework.org/" target="_blank" rel="noreferrer" className="col pr-0">
                                    <div id={styles.djRestLogo} aria-label="Link to django REST framework webpage">
                                    </div>
                                </a>
                                <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer" className="col pr-0">
                                    <div id={styles.postgresqlLogo} aria-label="Link to PostgreSQL webpage"></div>
                                </a>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <Languages />
        </>
    )
}

export default MySkills