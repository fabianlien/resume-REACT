import React from 'react';
import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faGraduationCap, faAddressBook, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import resume from '../assets/cv/Fabian_Lien_Resume.pdf';

const homeButton = (
  <li className={`${styles.home} col-6 col-sm-3 col-md-4 d-inline-block hvr-icon-fade`}>
    <Link to="/"> <FontAwesomeIcon icon={faHouseUser} aria-hidden="true" /><span>Home</span></Link>
  </li>
)

const resumeButton = (
  <li
    className={`${styles.resume} col-6 col-sm-3 col-md-2 d-inline-block hvr-shutter-out-vertical`}>
    <Link to="/resume"><FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" /><span>Resume</span></Link>
  </li>
)

const contactButton = (
  <li
    className={`${styles.contact} col-6 col-sm-3 col-md-2 d-inline-block hvr-shutter-out-vertical`}>
    <Link to="/contact"><FontAwesomeIcon icon={faAddressBook} aria-hidden="true" /><span>Contact</span></Link>
  </li>
)

const githubButton = (
  <li
    className={`${styles.github} col-6 col-sm-3 col-md-2 d-inline-block hvr-shutter-out-vertical`}>
    <Link to="/github"><FontAwesomeIcon icon={faGithub} aria-hidden="true" /><span>GitHub</span></Link>
  </li>
)

const downloadButton = (
  <li
    className={`${styles.download} d-none d-md-inline-block col-md-2 hvr-shutter-out-vertical`}>
    <Link to={resume} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFileArrowDown} aria-hidden="true" /><span>.pdf</span></Link>
  </li>
)

const Nav = () => {
  return (
    <header className="row">
      <Link to="/" className={`${styles.logo} col-md-4`}></Link>
      <div className="col-md-8">
        <div className="row">
          <div className={`${styles.heading} col`}>
            <h1 className={styles.name}>Fabian Lien</h1>
            <h2 className={styles.title}>Full Stack Developer</h2>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col">
            <ul id={styles.nav} className="list-inline">
              {homeButton}
              {resumeButton}
              {contactButton}
              {githubButton}
              {downloadButton}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav