import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterLink = ({url, icon, srTag}) => {
    return (
        <li className="list-inline-item">
            <a href={url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={icon} aria-hidden="true" />
                <span className="sr-only">{srTag}</span>
            </a>
        </li>
    )
}

export default FooterLink