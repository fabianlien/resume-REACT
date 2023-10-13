import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Resume.module.css'

const WorkHistory = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h3 className={styles.sectionHeading}>Work history</h3>
                </div>
            </div>
            <div className="col-10 offset-1 offset-sm-2 col-md-12 offset-md-0">
                <div className={styles.timelineItem} data-dates="02/2019 - 01/2022">
                    <h4>Spritmuseum</h4>
                    <p className="collapse-header" type="button" data-toggle="collapse"
                        data-target="#spritmuseum">Bar Manager <FontAwesomeIcon icon={faAngleDown} /></p>
                    <div className="collapse" id="spritmuseum">
                        <p>
                            <br />
                            Position managing the indoor bar as well as the outdoor pier during summer.
                            Managing orders and the beverage selection. Tasks include
                            coordinating menus with the kitchen, fashioning signature cocktails and
                            producing and fermenting drinks.
                        </p>
                        <br />
                    </div>
                </div>
                <div className={styles.timelineItem} data-dates="07/2014 - 12/2018">
                    <h4>Monks Bar</h4>
                    <p className="collapse-header" type="button" data-toggle="collapse" data-target="#monks">Bar
                        Manager <FontAwesomeIcon icon={faAngleDown} /></p>
                    <div className="collapse" id="monks">
                        <p>
                            <br />
                            Management of a valued craft beer bar with a selection consisting of several
                            hundreds of unique beers. Management and hiring/training of staff. Hosted beer
                            tastings for private bookings.
                        </p>
                        <br />
                    </div>
                </div>
                <div className={styles.timelineItem} data-dates="09/2014 - 02/2015">
                    <h4>Stadshuset Restauranger</h4>
                    <p className="collapse-header" type="button" data-toggle="collapse"
                        data-target="#stadshuset">Waiter <FontAwesomeIcon icon={faAngleDown} /></p>
                    <div className="collapse" id="stadshuset">
                        <p>
                            <br />
                            Waiting in both of Stadshuset's restaurants: a busy lunch cafe and a fine dining
                            restaurant. Work with the Nobel banquette.
                        </p>
                        <br />
                    </div>
                </div>
                <div className={styles.timelineItem} data-dates="11/2013 - 08/2014">
                    <h4>Strömma kanalbolag</h4>
                    <p className="collapse-header" type="button" data-toggle="collapse" data-target="#strömma">
                        Waiter <FontAwesomeIcon icon={faAngleDown} /></p>
                    <div className="collapse" id="strömma">
                        <p>
                            <br />
                            Waiting staff on popular destination ferries in the Stockholm archipelago.
                        </p>
                        <br />
                    </div>
                </div>
                <div className={styles.timelineItem} data-dates="08/2013 - 08/2014">
                    <h4>Arholma Nord Archipelago Lodge</h4>
                    <p className="collapse-header" type="button" data-toggle="collapse" data-target="#arholma">
                        Factotum and
                        guide <FontAwesomeIcon icon={faAngleDown} /></p>
                    <div className="collapse" id="arholma">
                        <p>
                            <br />
                            General factotum for a quaint lodge/hotel in the Stockholm archipelago.
                            Tasks include property management, cooking and waitering, guided tours
                            through a decommissioned military base, outdoor work, cleaning etc.
                        </p>
                        <br />
                    </div>
                </div>
            </div>
        </>

    )
}

export default WorkHistory