import React from 'react';
import Contact from './contact';

function ContactContainer({ contacts, isMobile }) {
    const numContactsPerRow = isMobile ? 1 : 3;
    const numRows = contacts.length / numContactsPerRow;

    const rows = [];
    for (let i = 0; i < numRows; i++){
        let row = [];
        for (let j = 0; j < numContactsPerRow; j++)
            row.add(contacts.shift());
        rows.push(row);
    }

  return (
    <div className="contact-container">
      {/* {contacts.map((contact, index) => (
        <div key={index} className="contact-row">
          {contacts.slice(index, index + numContactsPerRow).map((c, i) => (
            <div key={i} className="contact-col">
              <Contact {...c} />
            </div>
          ))} */}
        {rows.map((row, rowIndex) => {
            <div key={rowIndex} className="contact-row">
                {row.map((contact, contactIndex) => {
                    <div key={contactIndex} className="contact-col">
                        <Contact {...contact} />
                    </div>
                })}
            </div>
        })}
    </div>
  );
}

export default ContactContainer;
