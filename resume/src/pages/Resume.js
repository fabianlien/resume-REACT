import React from 'react'
import MySkills from '../components/resume/MySkills'
import styles from '../styles/Resume.module.css'
import Credentials from '../components/resume/Credentials';
import WorkHistory from '../components/resume/WorkHistory';


const Resume = () => {
  return (
    <div className="row">
                <div className={styles.resume}>
                  <MySkills/>    
                </div>
                <Credentials/>
                <div className={`${styles.sectionColumn} ${styles.workHistory} col-md-4`}>
                    <div className="row">
                        <div className="col-12">
                            <h3>Work history</h3>
                        </div>
                    </div>
                    <div className="row">
                        <WorkHistory/>
                    </div>
                </div>
            </div>
  )
}

export default Resume