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
            console.log(0);
            return (<Contact key={rowIndex} 
                imageUrl={contact.imageUrl} 
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
