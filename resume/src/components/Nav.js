import React, { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faGraduationCap, faAddressBook, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import resume from '../assets/cv/Fabian_Lien_Resume.pdf';

const Nav = () => {

  const [active, setActive] = useState("home");

  useEffect(() => {
    let prevActive = document.getElementsByClassName(`${styles.active}`)[0].classList;
    prevActive.add(`${styles.prev}`);
    prevActive.remove(`${styles.active}`);
    let activeLink = document.getElementById(active);
    activeLink.classList.add(`${styles.active}`);
  }, [active]);


  const homeButton = (
    <li onClick={() => { setActive("home") }} id="home"
      className={`${styles.home} ${styles.active} col-6 col-sm-3 col-md-2 d-inline-block hvr-icon-fade`}>
      <Link to="/" className={styles.navLink}> <FontAwesomeIcon icon={faHouseUser} aria-hidden="true" /><span>Home</span></Link>
    </li>
  )

  const resumeButton = (
    <li onClick={() => { setActive("resume") }} id="resume"
      className={`${styles.resume} col-6 col-sm-3 col-md-2 d-inline-block hvr-shutter-out-vertical`}>
      <Link to="/resume" className={styles.navLink}><FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" /><span>Resume</span></Link>
    </li>
  )

  const contactButton = (
    <li onClick={() => { setActive("contact") }} id="contact"
      className={`${styles.contact} col-6 col-sm-3 col-md-2 d-inline-block hvr-shutter-out-vertical`}>
      <Link to="/contact" className={styles.navLink}><FontAwesomeIcon icon={faAddressBook} aria-hidden="true" /><span>Contact</span></Link>
    </li>
  )

  const githubButton = (
    <li onClick={() => { setActive("github") }} id="github"
      className={`${styles.github} col-6 col-sm-3 col-md-2 d-inline-block hvr-shutter-out-vertical`}>
      <Link to="/github" className={styles.navLink}><FontAwesomeIcon icon={faGithub} aria-hidden="true" /><span>GitHub</span></Link>
    </li>
  )

  const downloadButton = (
    <li
      className={`${styles.download} d-none d-md-inline-block col-md-2 hvr-shutter-out-vertical`}>
      <Link to={resume} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFileArrowDown} aria-hidden="true" /><span>.pdf</span></Link>
    </li>
  )

  return (
    <header className="row">
      <image id={styles.logo} className="col-md-4 p-0"></image>
      <div className="col-md-8 p-0">
        <div className="row">
          <div className={`${styles.heading} col px-0`}>
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