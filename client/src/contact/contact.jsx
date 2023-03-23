import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../App.css';
import './contact.css'

function Picture({ imageUrl, title }) {
  return (
    <div className="picture">
      <div className="picture-frame">
        <img src={imageUrl} alt="Profile" className="picture-img" />
      </div>
      <p className="picture-job-title">{title}</p>
    </div>
  );
}

const Details = ({ name, location, company, address, phone }) => {
  return (
    <div className="details">
      <div className="details-row">
        {/* <span className="details-label">Name:</span> */}
        <span className="details-value">{name}</span>
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

const Buttons = ({}) => {
  return (
    <div className="buttons">
      <button >
        <FaEdit />
      </button>
      <button>
        <FaTrash />
      </button>
    </div>
  );
}

const Contact = ( { imageUrl, title, name, location, company, address, phone }) => {
    console.log("Contact")
  return (
    <div className="contact">
      <Picture imageUrl={imageUrl} title={title} />
      <Details name={name} location={location} company={company} address={address} phone={phone} />
      <Buttons />
    </div>
  );
}

export default Contact;
