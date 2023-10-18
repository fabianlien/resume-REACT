import React from 'react'
import { Accordion } from 'react-bootstrap';
import '../../styles/accordion.css';
import styles from '../../styles/Resume.module.css';

const WorkHistory = () => {
    const timelineItems = [
        { workPlace: "Spritmuseum", dates: "02/2019 - 01/2022", jobTitle: "Bar Manager", jobDescription: "Position managing the indoor bar as well as the outdoor pier during summer. Managing orders and the beverage selection. Tasks include coordinating menus with the kitchen, fashioning signature cocktails and producing and fermenting drinks." },
        { workPlace: "Monks Bar", dates: "07/2014 - 12/2018", jobTitle: "Bar Manager", jobDescription: "Management of a valued craft beer bar with a selection consisting of several hundreds of unique beers. Management and hiring/training of staff. Hosted beer tastings for private bookings."},
        { workPlace: "Stadshuset Restauranger", dates: "09/2014 - 02/2015", jobTitle: "Waiter", jobDescription: "Waiting in both of Stadshuset's restaurants: a busy lunch cafe and a fine dining restaurant. Work with the Nobel banquette."},
        { workPlace: "Strömma kanalbolag", dates: "11/2013 - 08/2014", jobTitle: "Waiter", jobDescription: "Waiting staff on popular destination ferries in the Stockholm archipelago."},
        { workPlace: "Arholma Nord Archipelago Lodge", dates: "08/2013 - 08/2014", jobTitle: "Factotum and guide", jobDescription: "General factotum for a quaint lodge/hotel in the Stockholm archipelago. Tasks include property management, cooking and waitering, guided tours through a decommissioned military base, outdoor work, cleaning etc.."},
    ]

    return (
        <>
            <div className="row p-4">
                <div className="col-12">
                    <h3 className={styles.sectionHeading}>Work history</h3>
                </div>
            </div>
            <div className="col-10 offset-1 col-md-12 offset-md-0 p-4">
                <Accordion flush>
                    {timelineItems.map((data, index) => {
                        return (
                            <div className={styles.timeline} data-dates={data.dates} key={index}>
                                <h4>{data.workPlace}</h4>
                                <Accordion.Item className="item" eventKey={index}>
                                    <Accordion.Header>{data.jobTitle}</Accordion.Header>
                                    <Accordion.Body>
                                        {data.jobDescription}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                        )
                    })}
                </Accordion>
            </div>
        </>

    )
}

export default WorkHistory