import React, {useState} from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../App.css';
import './contact.css'
import ContactDetails from './contactDetails';
import ContactPicture from './contactPicture';
import ContactButtons from './contactButtons';

const ContactDisplay = ( { image, title, name, location, company, address, phone, setIsEditing }) => {
  return (
    <div className="contact">
      <ContactPicture image={image} title={title} />
      <div>
        <ContactDetails name={name} 
          location={location} 
          company={company} 
          address={address} 
          phone={phone} 
        />
        <ContactButtons className="buttons" 
          setIsEditing={setIsEditing}
        />
      </div>
    </div>
  );
}

export default ContactDisplay;
