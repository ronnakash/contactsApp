import React, {useState} from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../App.css';
import './contact.css'
import ContactDetails from './contactDetails';
import ContactPicture from './contactPicture';
import ContactButtons from './contactButtons';

const ContactDisplay = ( { id, image, title, name, location, company, address, phone, setIsEditing, handleDelete }) => {
  return (
    <div className="contact contact-display">
      <ContactPicture image={image} title={title} />
      <div>
        <ContactDetails name={name} 
          location={location} 
          company={company} 
          address={address} 
          phone={phone} 
        />
        <ContactButtons className="buttons" 
          id={id}
          setIsEditing={setIsEditing}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default ContactDisplay;
