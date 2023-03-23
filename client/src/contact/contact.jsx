import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../App.css';
import './contact.css'
import ContactDetails from './contactDetails';
import ContactPicture from './contactPicture';
import ContactButtons from './contactButtons';

const Contact = ( { image, title, name, location, company, address, phone }) => {
    console.log("Contact")
  return (
    <div className="contact">
      <ContactPicture image={image} title={title} />
      <div>
      <ContactDetails name={name} location={location} company={company} address={address} phone={phone} />
      <ContactButtons className="buttons"/>
      </div>
    </div>
  );
}

export default Contact;
