import React from 'react';
import Contact from './contact';
import '../App.css'

function ContactContainer({ contacts, isMobile }) {
    const numContactsPerRow = isMobile ? 1 : 3;
    const numRows = contacts.length / numContactsPerRow;
    console.log("contact container")

  return (
    <div className="contact-container">
        {contacts.map((contact, rowIndex) => {
            console.log(contact);
            return (<Contact key={rowIndex} 
              image={contact.image} 
                title={contact.title} 
                name={contact.name} 
                location={contact.location} 
                company={contact.company} 
                address={contact.address} 
                phone={contact.phone} 
                />)
        })}
    </div>
  );
}


export default ContactContainer;
