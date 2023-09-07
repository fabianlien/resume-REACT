import React from 'react';
import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavButton = ({ content, icon, isActive, setActive}) => {

    return (
        <li onClick={() => { setActive(content) }} id={content}
            className={`${styles[content]} ${isActive ? styles.active : null} col-6 col-sm-3 col-md-2 d-inline-block`}>
            <Link to={`/${content}`} className={styles.navLink}> <FontAwesomeIcon icon={icon} aria-hidden="true" /><span>{content}</span></Link>
        </li>
    )
}

export default NavButton