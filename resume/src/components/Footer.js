import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';
import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <footer className="row">
        <div className="col-sm-4">
          <h5>About</h5>
          <span className={`${styles.footerSmall} inline-block`}>
            Full Stack Web Developer. Experienced in HTML to SQL and everything in between. Capacity for
            structural and design thinking.
          </span>
        </div>
        <div className="col-sm-4">
          <h5>Social</h5>
          <span className="inline-block">
            <ul className={`${styles.socialLinks} list-inline`}>
              <FooterLink url="https://www.facebook.com/fabian.lien/" icon={faFacebookSquare} srTag="Facebook"/>
              <FooterLink url="https://www.linkedin.com/in/fabian-lien/" icon={faLinkedin} srTag="Linkedin"/>
              <FooterLink url="https://www.instagram.com/fabianlien/" icon={faInstagramSquare} srTag="Instagram"/>
            </ul>
          </span>
        </div>
        <div className="col-sm-4">
          <h5>Download</h5>
          <span className={`${styles.cvPDF} inline-block`}>
            Need a printable CV? Download a .pdf here.
            <a href="assets/cv/Fabian_Lien_Resume.pdf" target="_blank">
              <FontAwesomeIcon icon={faFileArrowDown} className={styles.pdfIcon} aria-hidden="true"/>
              <span className="sr-only">Download link.</span>
            </a>
          </span>
        </div>
    </footer>
  )
}

export default Footer