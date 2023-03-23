import React from 'react';
import '../App.css';
import './contact.css'

function ContactPicture({ image, title }) {
  return (
    <div className="picture">
      <div className="picture-frame">
        <img src={image} alt="Profile" className="picture-img" />
      </div>
      <p className="picture-job-title">{title}</p>
    </div>
  );
}

export default ContactPicture;