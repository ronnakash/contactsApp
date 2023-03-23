import React from 'react';
import Contact from './contact';
import '../App.css'

function ContactContainer({ contacts, isMobile }) {
    const numContactsPerRow = isMobile ? 1 : 3;
    const numRows = contacts.length / numContactsPerRow;
    console.log("contact container")

  return (
    <div className="contact-container">
        {contacts.map((contact, contactId) => {
            console.log(contact);
            return (
              <Contact key={contactId} 
                contact={contact}
                />)
        })}
    </div>
  );
}


export default ContactContainer;
