import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './Contact.css';

function Picture({ imageUrl, jobTitle }) {
  return (
    <div className="picture">
      <div className="picture-frame">
        <img src={imageUrl} alt="Profile" className="picture-img" />
      </div>
      <p className="picture-job-title">{jobTitle}</p>
    </div>
  );
}

function Details({ name, location, company, address, phoneNumber }) {
  return (
    <div className="details">
      <div className="details-row">
        <span className="details-label">Name:</span>
        <span className="details-value">{name}</span>
      </div>
      <div className="details-row">
        <span className="details-label">Location:</span>
        <span className="details-value">{location}</span>
      </div>
      <div className="details-row">
        <span className="details-label">Company:</span>
        <span className="details-value">{company}</span>
      </div>
      <div className="details-row">
        <span className="details-label">Address:</span>
        <span className="details-value">{address}</span>
      </div>
      <div className="details-row">
        <span className="details-label">Phone:</span>
        <span className="details-value">{phoneNumber}</span>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="buttons">
      <button className="button-edit">
        <FaEdit />
      </button>
      <button className="button-delete">
        <FaTrash />
      </button>
    </div>
  );
}

function Contact({ imageUrl, jobTitle, name, location, company, address, phoneNumber }) {
  return (
    <div className="contact">
      <Picture imageUrl={imageUrl} jobTitle={jobTitle} />
      <Details name={name} location={location} company={company} address={address} phoneNumber={phoneNumber} />
      <Buttons />
    </div>
  );
}

export default Contact;
