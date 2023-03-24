import React from 'react';
import '../App.css';
import './contact.css'


const ContactDetails = ({ name, lat, lng, company, address, phone }) => {
  const location = (lat) + ":" + (lng);
  return (
      <div className="details">
        <div className="details-row">
          {/* <span className="details-label">Name:</span> */}
          <span className="contact-name">{name}</span>
        </div>
        <div className="details-row">
          {/* <span className="details-label">Location:</span> */}
          <span className="details-value">{location}</span>
        </div>
        <div className="details-row">
          {/* <span className="details-label">Company:</span> */}
          <span className="details-value">{company}</span>
        </div>
        <div className="details-row">
          {/* <span className="details-label">Address:</span> */}
          <span className="details-value">{address}</span>
        </div>
        <div className="details-row">
          {/* <span className="details-label">Phone:</span> */}
          <span className="details-value">{phone}</span>
        </div>
      </div>
    );
  }

export default ContactDetails