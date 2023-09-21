import React, { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faGraduationCap, faAddressBook, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import resume from '../assets/cv/Fabian_Lien_Resume.pdf';
import NavButton from './NavButton';

const Nav = () => {

  const [active, setActive] = useState("home");

  useEffect(() => {
    let prevActive = document.getElementsByClassName(`${styles.active}`)[0].classList;
    prevActive.add(`${styles.prev}`);
    prevActive.remove(`${styles.active}`);
    let activeLink = document.getElementById(active);
    activeLink.classList.add(`${styles.active}`);
  }, [active]);

  const downloadButton = (
    <li
      className={`${styles.download} d-none d-md-inline-block col-md-2`}>
      <Link to={resume} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFileArrowDown} aria-hidden="true" /><span>.pdf</span></Link>
    </li>
  )

  return (
    <header className="row">
      <div id={styles.logo} className="col-md-4 p-0" alt="profile image"></div>
      <div className="col-md-8 p-0">
        <div className="row m-0">
          <div className={`${styles.heading} col px-0 m-0`}>
            <h1 className={styles.name}>Fabian Lien</h1>
            <h2 className={styles.title}>Full Stack Developer</h2>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col">
            <ul id={styles.nav} className="list-inline">
              <NavButton content="home" icon={faHouseUser} isActive={true} setActive={setActive} />
              <NavButton content="resume" icon={faGraduationCap} setActive={setActive} />
              <NavButton content="contact" icon={faAddressBook} setActive={setActive} />
              <NavButton content="github" icon={faGithub} setActive={setActive} />
              {downloadButton}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav