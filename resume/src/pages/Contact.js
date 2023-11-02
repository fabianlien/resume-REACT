import React from 'react';
import InfoContact from '../components/contact/InfoContact';

const Contact = () => {
  return (
      <div className="row">
        <InfoContact/>
        <div className="col-md-8 section-column main-content-box-color contact-color contact-column">
          <div className="col">
            <h3 className="text-center">Got a project in mind?</h3>
            <h5 className="text-center">Let's work together!</h5>
            <div className="center-form">
              <div className="alert alert-secondary alert-dismissible fade show text-center d-none"
                role="alert" id="request-success"></div>
              <form onsubmit="return sendMail(this);">
                <input type="text" name="name" className="form-control mb-2" id="fullname"
                  placeholder="Name" required />
                <input type="email" name="emailaddress" className="form-control mb-2" id="emailaddress"
                  placeholder="Email" required />
                <textarea rows="5" name="projectsummary" className="form-control" id="projectsummary"
                  placeholder="Project Description" required></textarea>
                <button type="submit" className="btn btn-secondary center-block">Send Project
                  Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact